const Employee = require('./Employee')

class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        let role;
        return role = 'Manager';
    }
}

module.exports = class Manager{};