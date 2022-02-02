const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    
    getRole() {
        let role;
        return role = 'Engineer';
    };
}

module.exports = class Engineer{};