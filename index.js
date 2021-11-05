const inquirer = require('inquirer');

const generateHtml = (answers) => {
    return  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Website title -->

    <title>Profile</title>

    <!-- Linked Bootstrap Library -->

    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
  </head>

  <body>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Hi my name is ${answers.name}, and I am from ${answers.location}</h1>
        <p class="lead">Welcome to my Profile</p>
        <p>${answers.bio}</p>
        <ul class="list-group">
          <li class="list-group-item">Github: https://github.com/${answers.githubUserName}</li>
          <li class="list-group-item">LinkedIn: ${answers.linkedInUrl}</li>
        </ul>
      </div>
    </div>
  </body>
</html>`
}

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
        name: 'linkedInUrl',
        message: 'what is your linked in url',
    },
]).then((answers) => {
    console.log(answers);


//Generate a html file
const htmlPage = generateHtml(answers);

console.log(htmlPage)

//Write the file to disk

})




