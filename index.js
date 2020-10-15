// Require statements
const inquirer = require("inquirer");
const mysql = require("mysql");
const logo = require("asciiart-logo")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Ripremus23",
    database: "employees"
});



// function init

// function init () {
//     const logoText = logo({ name: "Employee Manager" }).render();
//     console.log(logoText);

//     // Load our prompts
//     loadPrompts();
// }

// function loadPrompts() {
//     inquirer.prompt ({
//         type: 'list',
//         name: "choice",
//         message: "What would you like to do?",
//         choice: [{
//             name: "View All Employees",
//             value: "VIEW_EMPLOYEES"
//         }]
//     })

//     // Switch statement
//     switch (choice) {
//         case "VIEW_EMPLOYEES":
//             return viewEmployees();
//     }



// }

// DB.viewEmployees()


inquirer.prompt({
    type: 'list',
    name: "choice",
    message: "What would you like to do?",
    choices: ["View Employees", "View Roles", "View Departments", "Add Employees", "Add Roles", "Add Departments", "Update Employee Roles"]
}).then(function (answerData) {
    console.log(answerData)

    if (answerData.choice === "View Employees") {
        connection.query("SELECT * FROM employee;", (error, employees) => {
            if (error) {
                console.error('An error occurred while executing the query')
                throw error
            }
            console.table(employees)
        })
    }

    else if (answerData.choice === "View Roles") {
        connection.query("SELECT * FROM role;", (error, roles) => {
            if (error) {
                console.error('An error occurred while executing the query')
                throw error
            }
            console.table(roles)
        })
    }

    else if (answerData.choice === "View Departments") {
        connection.query("SELECT * FROM department;", (error, departments) => {
            if (error) {
                console.error('An error occurred while executing the query')
                throw error
            }
            console.table(departments)
        })
    }
                                                                          // want to put parameter "answer.data" here in values 
else if (answerData.choice === "Add Employees") {                                               
        connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ();", (error, employees) => {
            if (error) {
                console.error('An error occurred while executing the query')
                throw error
            }
            console.table(employees)
        })
    }

    else if (answerData.choice === "Add Roles") {                                               
        connection.query("INSERT INTO role (title, salary, department_id) VALUES ();", (error, role) => {
            if (error) {
                console.error('An error occurred while executing the query')
                throw error
            }
            console.table(role)
        })
    }

    else if (answerData.choice === "Add Departments") {                                               
        connection.query("INSERT INTO department VALUES ();", (error, department) => {
            if (error) {
                console.error('An error occurred while executing the query')
                throw error
            }
            console.table(department)
        })
    }

    else if (answerData.choice === "Update Employees Roles") {                                               
        connection.query("UPDATE role SET SET title = answerData, salary =  department_id = 2);", (error, employeeRoles) => {
            if (error) {
                console.error('An error occurred while executing the query')
                throw error
            }
            console.table(employeeRoles)
        })
    }

})