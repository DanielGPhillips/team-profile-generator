const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./util/generateHtml');



const baseQuestions = [
    {
        type: "input",
        message: "Please input this team member's name: ",
        name: "name"
    },
    {
        type: "input",
        message: "Please input this team member's ID number: ",
        name: "id"
    },
    {
        type: "input",
        message: "Please input this team member's email address: ",
        name: "email"
    } 
];

const officeNumberQuestion = [{
    type: "input",
    message: "Please input this team member's office number: ",
    name: "officeNumber"
}];
const githubQuestion = [{
    type: "input",
    message: "Please input this team member's GitHub username: ",
    name: "github"
}];
const schoolQuestion = [{
    type: "input",
    message: "Please input the name of the school this team member is attending: ",
    name: "school"
}];

const teamOptions = [{
    type: "list",
    prompt: "What would you like to do next?",
    choices: ["Add engineer to team", "Add intern to team", "Finalize team"],
    name: "teamPick"
}];

const App = async () => {
    let team = [];
    let keepLooping = true;
    console.log("Follow the subsequent prompts to enter your team manager's information.");
    const { name: managerName, id: managerId, email: managerEmail } = await inquirer.prompt(baseQuestions);
    const { officeNumber } = await inquirer.prompt(officeNumberQuestion);
    team.push(new Manager(managerName, managerId, managerEmail, officeNumber));
    
    do {
        const { teamPick } = await inquirer.prompt(teamOptions);
        switch(teamPick) {
            case "Add engineer to team":
                console.log("Follow the subsequent prompts to enter this engineer's information.");
                const { name: engineerName, id: engineerId, email: engineerEmail } = await inquirer.prompt(baseQuestions);
                const { github } = await inquirer.prompt(githubQuestion);
                team.push(new Engineer(engineerName, engineerId, engineerEmail, github));
                break;
            case "Add intern to team":
                console.log("Follow the subsequent prompts to enter this intern's information.");
                const { name: internName, id: internId, email: internEmail } = await inquirer.prompt(baseQuestions);
                const { school } = await inquirer.prompt(schoolQuestion);
                team.push(new Intern(internName, internId, internEmail, school));
                break;
            default: 
                console.log("Finalizing team.")
                keepLooping = false;
                break;
        }

    } while (keepLooping);

    fs.writeFile("./dist/team.html", generateHtml(team), (err) => {
        if(err){
          throw err;
        }
        console.log("Wrote team.html to dist directory.");
    });
}

App();
