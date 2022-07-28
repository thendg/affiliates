require("dotenv").config();
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const winston = require("winston");

// TODO: use winston logging
// TODO: suppress ouput of exec when node is closed

async function execute(command, print = true) {
  if (print) console.log("-- " + arguments);
  const { stdout, stderr } = await exec(command);
  if (stderr) throw stderr;
  return stdout;
}

async function main() {
  const dockerrc = {
    linux: `docker run --rm --name ${process.env.MOONBEAM_CONTAINER_NAME} --network host purestake/moonbeam:v${process.env.MOONBEAM_VERSION} --dev`,
    darwin: `docker run --rm --name ${process.env.MOONBEAM_CONTAINER_NAME} -p 9944:9944 -p 9933:9933 purestake/moonbeam:v${process.env.MOONBEAM_VERSION} --dev --ws-external --rpc-external`,
    win32: `docker run --rm --name ${process.env.MOONBEAM_CONTAINER_NAME} -p 9944:9944 -p 9933:9933 purestake/moonbeam:v${process.env.MOONBEAM_VERSION} --dev --ws-external --rpc-external`,
  };

  if (!(process.platform in dockerrc)) {
    console.error("ERROR: Unsupported OS");
    return;
  }

  console.log("Deploying local Moonbeam node in development node...");
  console.log("[[LAUNCHING]]");
  await execute(
    `docker pull purestake/moonbeam:v${process.env.MOONBEAM_VERSION}`
  );
  execute(dockerrc[process.platform]);

  console.log("Detecting container...");
  const containerID = await new Promise(async (resolve, reject) => {
    async function getCID(timeWaited = 0) {
      if (timeWaited > 20000) reject("Took too long to get container ID");

      const cid = await execute(
        `docker ps -aqf "name=^${process.env.MOONBEAM_CONTAINER_NAME}$"`,
        false
      );
      if (cid) resolve(cid.trim());
      else setTimeout(getCID, 100, timeWaited + 100);
    }

    await getCID();
  });

  console.log(
    `[[ACTIVE]] - Local development node running in [${process.env.MOONBEAM_CONTAINER_NAME}-${containerID}]`
  );
  process.on("SIGINT", async () => {
    console.log("Closing local development node...");
    const commands = [
      `docker stop ${containerID}`,
      `docker rm ${containerID}`,
    ].map((cmd) => (process.platform == "linux" ? "sudo " : "" + cmd));
    for (const command of commands) await execute(command, false);
    process.exit(0);
  });
}

main();
