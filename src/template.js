const template = (team) => {
  const generateManager = (manager) => {
    return `
      <article class="card border-primary mb-3" style="width: 18rem">
      <article class="card-header bg-primary text-white border-success">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-text">Manager</h3>
      </article>
      <article class="card-body border-success bg-light">
        <ul class="list-group list-group-flush border">
          <li class="list-group-item">ID: ${manager.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li class="list-group-item">Office Number: ${manager.getOfficeNumber()} </li>
        </ul>
      </article>
  </article>`;
  };
  const generateEngineer = (engineer) => {
    return `
      <article class="card border-primary mb-3" style="width: 18rem">
      <article class="card-header bg-primary text-white border-success">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-text">Engineer</h3>
      </article>
      <article class="card-body border-success bg-light">
        <ul class="list-group list-group-flush border">
          <li class="list-group-item">ID: ${engineer.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="list-group-item">GitHub: ${engineer.getGitHub()} </li>
        </ul>
      </article>
  </article>`;
  };
  const generateIntern = (intern) => {
    return `
      <article class="card border-primary mb-3" style="width: 18rem">
      <article class="card-header bg-primary text-white border-success">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-text">Intern</h3>
      </article>
      <article class="card-body border-success bg-light">
        <ul class="list-group list-group-flush border">
          <li class="list-group-item">ID: ${intern.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li class="list-group-item">School: ${intern.getSchool()} </li>
        </ul>
      </article>
  </article>`;
  };

  const html = [];

  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );

  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );

  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
      .join("")
  );

  return html.join("")
};
const boilerPlate = (team) => {
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
        <h1 class="text-center bg-danger text-white" style="padding: 1rem">
          My Team
        </h1>
      </header>
      <main class="container">
        <section
          class="row row-cols-1 row-cols-md-3 g-4 align-middle"
          style="padding: 1rem"
        >
          <section class="col d-flex justify-content-center">
            ${template(team)}
          </section>
          
          
        </section>
      </main>
    </body>
  </html>`;
};

module.exports = boilerPlate;
