const generateHtml = ({ name, location, bio, githubUserName, linkedInUrl }) => {
  return `<!DOCTYPE html>
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
          <h1 class="display-4">Hi my name is ${name}, and I am from ${location}.</h1>
          <p class="lead">Welcome to my Profile</p>
          <p>${bio}</p>
          <ul class="list-group">
            <li class="list-group-item">Github: <a href="https://github.com/${githubUserName}">github.com/${githubUserName}</a></li>
            <li class="list-group-item">LinkedIn: <a href="${linkedInUrl}">${linkedInUrl}</a></li>
          </ul>
        </div>
      </div>
    </body>
  </html>`;
};

module.exports = {
  generateHtml,
};
