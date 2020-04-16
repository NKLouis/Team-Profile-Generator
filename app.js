const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const myTeam = [];

const questions = [{

    type: "Input",
    message: "Please enter your full name",
    name: "fullName"
},
{
    type: "Input",
    message: "Please enter your employee id",
    name: "id"
},
{
    type: "Input",
    message: "Please enter your email",
    name: "email"
},
{
    type: "list",
    message: "Please choose your employee type",
    choices: ["Manager", "Engineer", "Intern"],
    name: "role"

}];

const inquireQuestion = () => {

    inquirer
    .prompt([
        {
        type: "list",
        message: "What would you like to do?",
        choices: ["Build team/Add team member", "No more/Finish"],
        name: "buildMyTeam"

        }
    ]).then(response => {
           // console.log(response);
            const buildMyTeam = response.buildMyTeam;
            switch (buildMyTeam) {

                case "Build team/Add team member":
                    inquirer
                    .prompt(questions)
                    .then(response => {

                        if (response.role === "Manager") {
                            inquirer
                            .prompt({
                                type: "input",
                                message: "Please enter your office number",
                                name: "officeNumber"
                            })
                                .then(managerOfficeNum => {

                                    let newManager = new Manager(response.fullName, response.id, response.email, response.role, managerOfficeNum.officeNumber);
                                   //console.log(newManager);
                                    myTeam.push(newManager);
                                    console.log(myTeam);

                                    inquireQuestion();
                                })
                        }
                        else if (response.role === "Engineer"){
                            inquirer
                            .prompt({
                                type: "input",
                                message: "Please enter your GitHub account",
                                name: "gitHub"
                            })
                                .then(engineerGithub => {

                                    let newEngineer = new Engineer(response.fullName, response.id, response.email, response.role, engineerGithub.gitHub);
                                    //console.log(newEngineer);
                                    myTeam.push(newEngineer);
                                    console.log(myTeam);

                                    inquireQuestion();
                                })
                        }
                        else if (response.role === "Intern"){
                            inquirer.prompt({
                                type: "input",
                                message: "Please enter your school",
                                name: "school"
                            })
                                .then(internsSchool => {

                                    let newIntern = new Intern(response.fullName, response.id, response.email, response.role, internsSchool.school);
                                   //console.log(newIntern);
                                    myTeam.push(newIntern);
                                    console.log(myTeam);

                                    inquireQuestion();
                                });
                        };
                    });
                    break;

                case "No more/Finish":
                    if (myTeam.length > 0) {
                        writeHTML(render(myTeam));
                        console.log("Your team has been created." );
                    }
                    else{
                        console.log("There is no team member.")
                        inquireQuestion();
                    } 
                    break;
            }
        });
}

const writeHTML = HTML => {

    fs.writeFileSync(outputPath, HTML, err => {
        if (err){
            return console.log(err);

        }
    });
}
inquireQuestion();



                
                    


                        

                
                

                    

                
            
        




// // Write code to use inquirer to gather information about the development team members,
// // and to create objects for each team member (using the correct classes as blueprints!)

// // After the user has input all employees desired, call the `render` function (required
// // above) and pass in an array containing all employee objects; the `render` function will
// // generate and return a block of HTML including templated divs for each employee!

// // After you have your html, you're now ready to create an HTML file using the HTML
// // returned from the `render` function. Now write it to a file named `team.html` in the
// // `output` folder. You can use the variable `outputPath` above target this location.
// // Hint: you may need to check if the `output` folder exists and create it if it
// // does not.

// // HINT: each employee type (manager, engineer, or intern) has slightly different
// // information; write your code to ask different questions via inquirer depending on
// // employee type.

// // HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// // and Intern classes should all extend from a class named Employee; see the directions
// // for further information. Be sure to test out each class and verify it generates an 
// // object with the correct structure and methods. This structure will be crucial in order
// // for the provided `render` function to work!```
