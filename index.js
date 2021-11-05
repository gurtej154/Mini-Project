const inquirer = require("inquirer");
const fs = require("fs");
const { generateHtml } = require("./utils");
//const utils = require("./utils");

//Ask the user some questions

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "what is your name?",
    },
    {
      type: "input",
      name: "location",
      message: "Where are you located?",
    },
    {
      type: "input",
      name: "bio",
      message: "what is your bio?",
    },
    {
      type: "input",
      name: "githubUserName",
      message: "what is your github username?",
    },
    {
      type: "input",
      name: "linkedInUrl",
      message: "what is your linked in url",
    },
  ])
  .then((answers) => {
    // console.log(answers);

    //Generate a html file
    const htmlPage = generateHtml(answers);

    // console.log(htmlPage);

    //Write the file to disk

    fs.writeFile("output/index.html", htmlPage, (err) => {
      if (err) {
        console.log("There was an error while writing the file");
        console.log(err);
        return;
      }
      console.log("Profile sucessfully generated");
    });
  });
