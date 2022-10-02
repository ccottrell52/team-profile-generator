const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const yourTeam = [];


const managerQuestions = () => {
    const questions = [
        {
            type: 'input',
            message: "What is your manager's name?",
            name: 'managername',
        },
        {
            type: 'input',
            message: "What is your manager's employee ID?",
            name: 'managerid',
        },
        {
            type: 'input',
            message: "What is your manager's email address?",
            name: 'manageremail',
        },
        {
            type: 'input',
            message: "What is your manager's office number?",
            name: 'managernumber',
        },
    ]
    return inquirer
        .prompt(questions)
        .then((data) => {
            const manager = new Manager(data.managername, data.managerid, data.manageremail, data.managernumber)
            console.log(manager)
            yourTeam.push(manager)
        })
        
        .then(options);
}
const engineerQuestions = () => {
    const questions = [
        {
            type: 'input',
            message: "What is your engineers name?",
            name: 'engineername',
        },
        {
            type: 'input',
            message: "What is your engineers employee ID?",
            name: 'engineerid',
        },
        {
            type: 'input',
            message: "What is your engineers email address?",
            name: 'engineersemail',
        },
        {
            type: 'input',
            message: "What is your engineers GitHub profile?",
            name: 'engineergithub',
        },
    ]
    return inquirer
        .prompt(questions)
        .then((data) => {
            const engineer = new Engineer(data.engineername, data.engineerid, data.engineersemail, data.engineergithub)
            console.log(engineer)
            yourTeam.push(engineer)
        })
        .then(options);
}
const internQuestions = () => {
    const questions = [
        {
            type: 'input',
            message: "What is your interns name?",
            name: 'internsname',
        },
        {
            type: 'input',
            message: "What is your interns employee ID?",
            name: 'internsid',
        },
        {
            type: 'input',
            message: "What is your interns email address?",
            name: 'internsemail',
        },
        {
            type: 'input',
            message: "What school does your intern attend?",
            name: 'internsschool',
        },
    ]
    return inquirer
        .prompt(questions)
        .then((data) => {
            const intern = new Intern(data.internsname, data.internsid, data.internsemail, data.internsschool)
            console.log(intern)
            yourTeam.push(intern)
        })
        .then(options);
}

const options = () => {
    const questions = [
        {
            type: "list",
            name: "action",
            message: "Add an employee?",
            choices: [
                { name: "Engineer", value: "Action1" },
                { name: "Intern", value: "Action2" },
                { name: "Finish Team Generator", value: "Action3" },
            ]
        }
    ];
    inquirer
        .prompt(questions)
        .then(answers => {
            if (answers.action === 'Action1') {
                engineerQuestions();
            }
            else if (answers.action === 'Action2') {
                internQuestions();
            } 
            else if (answers.action === 'Action3'){
                console.log('Finishing...')
                console.log(yourTeam)
                fs.writeFile('dist/index.html', generateHTML(yourTeam), (err) =>
                err ? console.error(err) : console.log('Success! You generated your TEAM!'))
            }
        })
};

managerQuestions()