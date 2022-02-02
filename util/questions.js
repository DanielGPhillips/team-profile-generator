const questions = {
    Manager: [
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the manager:',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the Employee ID of the manager:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email address of the manager:',
        },
        {
            type: 'input',
            name: 'phone',
            message: 'Please enter the office number of the manager:',
        },
        {
            type: "list",
            name: "addNew",
            message: "Do you want to add another employee",
            choices: ["yes", "no"]
        }
    ],
    Engineer: [
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the engineer.'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the Employee ID of the engineer:',  
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email address of the engineer:',
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'Please enter the gitHub username of the engineer:',
        },
        {
            type: "list",
            name: "addNew",
            message: "Do you want to add another employee",
            choices: ["yes", "no"]
        }
    ],
    Intern: [
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the engineer.'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the Employee ID of the engineer:',  
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email address of the engineer:',
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter the school the intern is attending:',
        },
        {
            type: "list",
            name: "addNew",
            message: "Do you want to add another employee",
            choices: ["yes", "no"]
        }
    ]
};

const selectMemberType = [
    {
        type: "list",
        name: "memberType",
        message: "Please choose the role for the employee",
        choices: ["Manager", "Engineer", "Intern"],
    }
];