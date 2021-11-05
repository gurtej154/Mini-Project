const inquirer = require('inquirer');

//Ask the user some questions

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'what is your name?',
    },
    {
        type: 'input',
        name: 'location',
        message: 'Where are you located?',
    },
    {
        type: 'input',
        name: 'bio',
        message: 'what is your bio?',
    },
    {
        type: 'input',
        name: 'githubUserName',
        message: 'what is your github username?',
    },
    {
        type: 'input',
        name: 'linkedinUrl',
        message: 'what is your linked in url',
    },
]).then((answers) => {
    console.log(answers);
})


//Generate a html file

//Write the file to disk