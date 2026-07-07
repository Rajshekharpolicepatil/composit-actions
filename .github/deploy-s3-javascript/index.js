const core = require("@actions/core"); // ✅ CommonJS
const github = require("@actions/github");
const exec = require("@actions/exec");

function run() {
  core.notice("Hellow from my custome js actions");
}
run();
