// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee.js');

class Intern extends Employee {

constructor(role,school){

    super(name,id,email,role)
    this.role = Intern;
    this.school = school;
}

getRole(){

    return this.role
}
getSchool(){
    return this.school
}

}
module.exports = Intern;