const inquirer = require('inquirer')
const fs = require('fs')

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Please enter the name of the manager:',
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'Please enter the Employee ID of the manager:',
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Please enter the email address of the manager:',
        },
        {
            type: 'input',
            name: 'managerPhone',
            message: 'Please enter the office number of the manager:',
        },
        {
            type: 'list',
            name: 'nextChoice',
            message: 'Please select what you would like to do next:',
            choices: ['Add Engineer', 'Add Intern']
        },
    ])
}