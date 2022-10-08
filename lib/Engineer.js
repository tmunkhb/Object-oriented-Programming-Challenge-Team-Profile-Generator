const Employee = require('../lib/Employee');
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // reference parent constructor using keyword 'super'
        super(name, id, email);
        this.github = github;
    }
    
    getGithub() {
        return this.github
    }

    getRole () {
        return 'Engineer'
    }
}

module.exports = Engineer;