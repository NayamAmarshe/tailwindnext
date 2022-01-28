#!/usr/bin/env node
const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (error) {
    console.log("Uh oh, something broke...", command);
    return false;
  }

  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/NayamAmarshe/tailwindnext.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log("Hold on, downloading the good stuff...");
const checkedOut = runCommand(gitCheckoutCommand);

if (!checkedOut) {
  process.exit(-1);
}

console.log("Installing dependencies");
const installedDeps = runCommand(installedDeps);

if (!installedDeps) {
  process.exit(-1);
}

console.log("Awesome! We're done");
