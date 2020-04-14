// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee.js');

class Manager extends Employee {

    constructor(role, officeNum) {

        super(name, id, email, role)

        this.role = Manager;
        this.officeNum = this.officeNum;


    }
    getRole() {
        return this.role
    }

    getoffice() {

        return this.officeNum
    }
}
module.exports = Manager;