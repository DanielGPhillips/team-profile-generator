const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getRole() {
        let role;
        return role = 'Intern'
    }
}

module.exports = class Intern{};