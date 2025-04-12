#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import clear from "clear";
import figlet from "figlet";
import gradient from "gradient-string";
import inquirer from "inquirer";
import open from "open";
import { exec } from "child_process";

// Clear the terminal
clear();

// ASCII banner
console.log(
  gradient.pastel.multiline(
    figlet.textSync("Webverse", { horizontalLayout: "full" })
  )
);

// Bio box
const bio = boxen(
  chalk.whiteBright(`
Hi! I'm Ram Kumar
A second-year engineering student specializing in frontend development and data science.
Passionate about learning new skills and writing clean, professional code.

${chalk.green.bold("GitHub:")} ${chalk.blueBright("https://github.com/Rxm46")}
${chalk.green.bold("LinkedIn:")} ${chalk.blueBright("https://www.linkedin.com/in/ramkumar46")}
${chalk.green.bold("Portfolio (Available soon..!):")} ${chalk.greenBright("http://localhost:3000")}
${chalk.green.bold("Instagram:")} ${chalk.cyan("https://www.instagram.com/raahhmm__")}
`),
  {
    padding: 1,
    margin: 1,
    borderStyle: "double",
    borderColor: "gray",
  }
);

console.log(bio);

console.log(
  chalk.yellow("💡 Suggestion: Try using ") +
  chalk.blue("cmd/ctrl + click") +
  chalk.yellow(" on the links above to open/copy")
);

// User interaction
function promptUser() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "🤖 What do you want to do?",
        choices: [
          "🌐 Open GitHub",
          "💼 Open LinkedIn",
          "📧 Send me an email",
          "🚪 Just quit!",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.action) {
        case "🌐 Open GitHub":
          open("https://github.com/Rxm46");
          console.log("🚀 Opening GitHub...");
          break;
        case "💼 Open LinkedIn":
          open("https://www.linkedin.com/in/ramkumar46");
          console.log("🔗 Opening LinkedIn...");
          break;
        case "📧 Send me an email":
          console.log("📩 Opening mail...");
          exec("start mailto:ramvj2005@gmail.com");
          break;
        case "🚪 Just quit!":
          console.log("👋 Goodbye!");
          return;
      }
      promptUser(); // loop again
    });
}

// Start
promptUser();