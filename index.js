const inquirer = require('inquirer');

const promptManager = () => {
    return inquirer.prompt([ 
        {
            type: 'input',
            name: 'name',
            message: "Please enter team manager's name.",
            valdiate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter team manager's name!");
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'id',
            message: "Please enter team manager's ID.",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter team manager's ID!");
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: "Please enter team manager's email address.",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter team manager's email address!");
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'officenumber',
            message: "Please enter team manager's office number.",
            validate: officenumberInput => {
                if (officenumberInput) {
                    return true;
                } else {
                    console.log("Please enter team manager's office number!");
                    return false;
                }
            }
        },

    ])
}
