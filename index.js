const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateTeam = require('./util/generateHtml');
const questions = require('./util/questions');
const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "team.html")
const team = [];
const needManager = true;


const addNewMember = () => {
    inquirer.prompt(questions.selectMemberType)
        .then(answer => {

            if (answer === "Manager") {
                if (needManager) {
                    inquirer.prompt(questions.Manager)
                        .then(answer => {
                            const manager = new Manager (
                                answer.name, 
                                answer.id, 
                                answer.email,
                                answer.phone
                            );

                            team.push(manager);
                            needManager = false;
                            if (answer.addNew === "yes") {
                                addNewMember();
                            } else {
                                generateTeam();
                            }
                        });
                } else {
                    console.log("You can only have one manager.");
                    addNewMember();
                }
            }

            else if (answer.memberType === "Engineer") {
                inquirer.prompt(questions.Engineer) 
                    .then(answer => {
                        const engineer = new Engineer
                            (
                                answer.name,
                                answer.id,
                                answer.email,
                                answer.gitHub
                            );
                        team.push(engineer);
                        if (answer.addNew === "yes") {
                            addNewMember();
                        } else {
                            generateTeam();
                        };
                    });
            }

            else if (answer.memberType === "Intern") {
                inquirer.prompt(questions.Intern) 
                    .then(answer => {
                        const intern = new Intern
                            (
                                answer.name,
                                answer.id,
                                answer.email,
                                answer.scool
                            );
                        team.push(intern);
                        if (answer.addNew === "yes") {
                            addNewMember();
                        } else {
                            generateTeam();
                        };
                    });
            }        
        })
};

addNewMember();

function generate() {
    fs.writeFileSync(outputPath, generateTeam(team), "utf-8");
    process.exit(0);
}