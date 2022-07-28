require("dotenv").config();
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const winston = require("winston");

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        winston.format.printf(
          (info) =>
            `|${info.timestamp}| [MNBM DEV ${info.level}]: ${info.message}`
        )
      ),
    }),
  ],
});

async function execute(command, print = true, options = {}) {
  if (print) logger.info("-- " + command);
  const { stdout, stderr } = await exec(command, options);
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
    logger.error("ERROR: Unsupported OS");
    return;
  }

  logger.info("Deploying local node in development node...");
  logger.info("LAUNCHING...");
  await execute(
    `docker pull purestake/moonbeam:v${process.env.MOONBEAM_VERSION}`
  );
  execute(dockerrc[process.platform]);

  logger.info("Detecting container...");
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

  logger.info(
    `[[ACTIVE]] - Local development node running in [${process.env.MOONBEAM_CONTAINER_NAME}-${containerID}]`
  );
  process.on("SIGINT", async () => {
    logger.info("Closing local development node...");
    await execute(
      `${
        process.platform == "linux" ? "sudo " : ""
      } docker stop ${containerID}`,
      false
    );
    process.exit(0);
  });
}

main();
