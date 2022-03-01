const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
// const generateTeam = require ('./src/template');

const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const template = require("./src/template");

let team = [];

function start() {
  function promptManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is team managers name?",
        },
        {
          type: "input",
          name: "managerId",
          message: "What is manager's ID?",
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is managers email?",
        },
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is manager's office number?",
        },
      ])
      .then((answers) => {
        console.log(answers);
          const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
          team.push(manager);
          console.log(team);
          createTeam();
      });
  }

  function createTeam() {
      inquirer
      .prompt ([
          {
            type: "list",
            name: "teamMemberChoice",
            message: "Which type of team member would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "Exit and create my team."
            ]
          }
      ]).then((answer) => {
        switch (answer.teamMemberChoice) {
            case "Engineer":
                promptEngineer();
                break;
            case "Intern":
                promptIntern();
                break;
            default:
                generateTeam();
        }
      })
  }

  function promptEngineer(){
    inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is engineer's name?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is engineer's ID?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is engineer's email?",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is engineer's Github?",
      },
    ])
    .then((answers) => {
      console.log(answers);
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        team.push(engineer);
        console.log(team);
        createTeam();
    });

  }

  function promptIntern(){
    inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is team intern's name?",
      },
      {
        type: "input",
        name: "internId",
        message: "What is intern's ID?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is intern's email?",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is intern's school?",
      },
    ])
    .then((answers) => {
      console.log(answers);
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        team.push(intern);
        console.log(team);
        createTeam();
    });

  }

  function generateTeam(){
    fs.writeFileSync(path.join(path.resolve(__dirname, "dist"), "team.html"), template(team), "utf-8");
  }

  promptManager();
}
start();
