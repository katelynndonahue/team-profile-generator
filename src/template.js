const Employee = require("../lib/employee");

const template = (team) => {
  const generateEngineer = (engineer) => {};
  const generateManager = (manager) => {
    return `
      <article class="card border-primary mb-3" style="width: 18rem">
      <article class="card-header bg-primary text-white border-success">
        <h2 class="card-title">${manager.name}</h2>
        <h3 class="card-text">Manager</h3>
      </article>
      <article class="card-body border-success bg-light">
        <ul class="list-group list-group-flush border">
          <li class="list-group-item">ID: ${manager.managerId}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.managerEmail}">${manager.managerEmail}</a></li>
          <li class="list-group-item">Office Number: ${manager.managerOfficeNumber} </li>
        </ul>
      </article>
  </article>`;
  };
  const generateIntern = (intern) => {};
  
  const html = [];

  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
};
const boilerPlate = () => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="./style.css" />
      <title>Team Profile</title>
    </head>
    <body>
      <header>
        <h1 class="text-center bg-danger text-white" style="padding: 1rem">My Team</h1>
      </header>
      <main class="container">
        <section class="row row-cols-1 row-cols-md-3 g-4 align-middle" style="padding: 1rem">
          <section class="col d-flex justify-content-center">
  ${template(team)}
</section><section class="col d-flex justify-content-center">
  <article class="card border-primary mb-3" style="width: 18rem">
      <article class="card-header bg-primary text-white border-success">
        <h2 class="card-title">Sam</h2>
        <h3 class="card-text">Engineer</h3>
      </article>
      <article class="card-body border-success bg-light">
        <ul class="list-group list-group-flush border">
          <li class="list-group-item">ID: 456</li>
          <li class="list-group-item">Email: <a href="mailto:sam@email.com">sam@email.com</a></li>
          <li class="list-group-item">Github: <a href="https://github.com/samdev" target="_blank">samdev</a> </li>
        </ul>
      </article>
  </article>
</section><section class="col d-flex justify-content-center">
  <article class="card border-primary mb-3" style="width: 18rem">
      <article class="card-header bg-primary text-white border-success">
        <h2 class="card-title">dave</h2>
        <h3 class="card-text">Intern</h3>
      </article>
      <article class="card-body border-success bg-light">
        <ul class="list-group list-group-flush border">
          <li class="list-group-item">ID: 03</li>
          <li class="list-group-item">Email: <a href="mailto:dave@email.com">dave@email.com</a></li>
          <li class="list-group-item">School: Rutgers </li>
        </ul>
      </article>
  </article>
</section>
        </section>
      </main>
    </body>
  </html>`;
};

module.exports = template;
