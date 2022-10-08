const Employee = require('../lib/Employee');
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // reference parent constructor using keyword 'super'
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    
    getofficeNumber() {
        return this.officeNumber
    }

    getRole () {
        return 'Manager'
    }
}

module.exports = Manager;