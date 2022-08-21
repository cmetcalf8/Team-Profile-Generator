const fs = require('fs');
const inquirer = require('inquirer');

function init() {

function addManager() {
    inquirer.prompt ([
      
      {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?"
      },
  
      {
        type: "input",
        name: "managerId",
        message: "What is the manager's employee ID number?"
      },
  
      {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email address?"
      },
  
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the manager's office number?"
      }
  
    ]).then(answers => {
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
      teamArray.push(manager);
      createTeam();
    });
  
  }

  function addEngineer() {
    inquirer.prompt ([
      
      {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?"
      },
  
      {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's employee ID number?"
      },
  
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email address?"
      },
  
      {
        type: "input",
        name: "engineerOfficeNumber",
        message: "What is the engineer's office number?"
      }
  
    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerOfficeNumber);
      teamArray.push(engineer);
      createTeam();
    });
  
  }

  function addIntern() {
    inquirer.prompt ([
      
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?"
      },
  
      {
        type: "input",
        name: "internId",
        message: "What is the intern's employee ID number?"
      },
  
      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email address?"
      },
  
      {
        type: "input",
        name: "internOfficeNumber",
        message: "What is the intern's office number?"
      }
  
    ]).then(answers => {
      const intern = new intern(answers.internName, answers.internId, answers.internEmail, answers.internOfficeNumber);
      teamArray.push(intern);
      createTeam();
    });
  
  }
}

init();