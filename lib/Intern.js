const Employee = require('../lib/Employee');
class Intern extends Employee {
    constructor (name, id, email, school) {
        // reference parent constructor using keyword 'super'
        super(name, id, email);
        this.school = school;
    }
    
    getSchool() {
        return this.school
    }

    getRole () {
        return 'Intern'
    }
}

module.exports = Intern;