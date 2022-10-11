// node module
const inquirer = require('inquirer');
const fs = require('fs');

// html template module
const createTeam = require('./src/page-template')

// class modules
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// empty team array to be populated
const teamMembersArray = [];


// async function instead of .then and promise chain
async function questions() {
    const answers = await inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Please enter your name.",
            valdiate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("You must enter your name!");
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'id',
            message: "Please enter your ID.",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("You must enter an ID!");
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: "Please enter your email address.",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("You must enter an email address!");
                    return false;
                }
            }
        },

        {
            type: 'list',
            name: 'roles',
            message: 'Please choose your role.',
            choices: ['Manager', 'Engineer', 'Intern']
        },
    ]);
        
        if (answers.roles === 'Manager') {
            const answerManager = await inquirer.prompt([
                {
                type: 'input',
                name: 'officeNumber',
                message: 'Please enter your office number'},
            ]);
            const manager = new Manager 
            (answers.name, answers.id, answers.email, answerManager.officeNumber);
            teamMembersArray.push(manager);
    
        } else if (answers.roles === 'Engineer') {
            const answerEngineer = await inquirer.prompt([
                {
                type: 'input',
                name: 'github',
                message: 'Please enter your github username.',
                }
            ]);
            const engineer = new Engineer
            (answers.name, answers.id, answers.email, answerEngineer.github);
            teamMembersArray.push(engineer);
        
        } else if (answers.roles === 'Intern') {
            const answerIntern = await inquirer.prompt([
                {
                type: 'input',
                name: 'school',
                message: 'Please enter your school name',
                }
            ]);
            const intern = new Intern
            (answers.name, answers.id, answers.email, answerIntern.school);
            teamMembersArray.push(intern);
        }
};

async function promptQuestions() {
    await questions()

    const addMembersAns = await inquirer.prompt([
        {
        type: 'list',
        name: 'newMember',
        message: 'Please choose one',
        choices: ['Add a new team member', 'Finish creating team'],
        }
    ])

    if (addMembersAns.newMember === 'Add a new team member') {
        return promptQuestions()
    }
    return makeTeam();
}

promptQuestions();

function makeTeam() {
    console.log('New Team', teamMembersArray)
    fs.writeFileSync(
        './dist/index.html',
        createTeam(teamMembersArray),
        'utf-8'
    );
}