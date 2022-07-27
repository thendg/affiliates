require("dotenv").config();
const util = require("util");
const exec = util.promisify(require("child_process").exec);

const dockerrc = {
  linux: `docker run --rm --name ${process.env.MOONBEAM_CONTAINER_NAME} --network host purestake/moonbeam:v${process.env.MOONBEAM_VERSION} --dev`,
  darwin: `docker run --rm --name ${process.env.MOONBEAM_CONTAINER_NAME} -p 9944:9944 -p 9933:9933 purestake/moonbeam:v${process.env.MOONBEAM_VERSION} --dev --ws-external --rpc-external`,
  win32: `docker run --rm --name ${process.env.MOONBEAM_CONTAINER_NAME} -p 9944:9944 -p 9933:9933 purestake/moonbeam:v${process.env.MOONBEAM_VERSION} --dev --ws-external --rpc-external`,
};

// TODO: make command param accept single and multiple values, so we don't keep having to use for...of
async function execute(command, log = true) {
  if (log) console.log("-- " + command);
  const { stdout, stderr } = await exec(command);
  if (stderr) throw stderr;
  if (log) console.log(stdout);
  return stdout;
}

function exitHandler(options, exitCode) {
  if (options.cleanup) console.log("clean");
  if (exitCode || exitCode === 0) console.log(exitCode);
  if (options.exit) process.exit();
}

async function main() {
  if (!(process.platform in dockerrc)) {
    console.error("ERROR: Unsupported OS");
    return;
  }

  console.log("Deploying local Moonbeam node in development node...");
  console.log("[[LAUNCHING]]");
  const commands = [
    `docker pull purestake/moonbeam:v${process.env.MOONBEAM_VERSION}`,
    dockerrc[process.platform],
  ];

  for (const command of commands) await execute(command); // code gets stuck here because the `docker run` command doesn't return

  const containerId = await execute(
    `docker ps -aqf "name=^${process.env.MOONBEAM_CONTAINER_NAME}$"`
  );

  console.log(
    `Local Moonbeam development mode running in contianer ${process.env.MOONBEAM_CONTAINER_NAME}-${containerId}`
  );

  process.on("exit", () => {
    const commands = [`docker stop ${containerId}`, `docker rm ${containerId}`]
    for (const command of commands)
      await execute(process.platform == "linux" ? "sudo " : "" + command)
  });
}

main();
