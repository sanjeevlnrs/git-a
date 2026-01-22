const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("@actions/exec");

function run() {
  const message = core.getInput("log-message", { required: true });
  //core.notice(`JavaScript Action says: ${message}`);
  core.setOutput("logged-message", message);
}

run();
