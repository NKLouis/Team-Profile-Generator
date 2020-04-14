// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee.js');

class Engineer extends Employee{

constructor(role,github,){

 super(name,id,email,role)

 this.role = Engineer;
 this.github = github;

}
getGithub(){
    return this.github
}

getRole(){

    return this.role
}

}
module.exports = Engineer;