var argv = require("optimist").argv;
var logger = require("./prettyConsole");
module.exports = () => {
    "use strict";
    if (argv.help || argv.h) {
        console.log(
`Usage: newrelic-neo4j [options]

Options
    -f, --fork      forks the process into a daemon
    -c, --config    sets the config file location
    -o, --out       sets location to output log file
`
        );
        process.exit();
    }

    if (argv.f || argv.fork) {
        logger.log("Forking process...");
        require("daemon")();
    }


    GLOBAL.CONFIG_FILE = argv.config || argv.c || "./config";
    GLOBAL.OUTPUT_LOG = argv.out || argv.o;
};