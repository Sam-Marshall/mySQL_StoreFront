var config = require('./config.js');
var mysql = require('mysql');
var inquirer = require('inquirer');
require('console.table');
var customerMainMenu = require('./bamazonCustomer.js');
var managerMainMenu = require('./bamazonManager.js')

var connection = mysql.createConnection(config);

connection.connect(function(error) {
    if (error) throw error;
});

var mainMenu = function() {

    console.log('\n');

    inquirer.prompt([{

        type: 'list',
        name: 'bamazonOption',
        message: 'Welcome to Bamazon!! What type of experience would you like to have?',
        choices: ['Customer Menu', 'Manager Menu']

    }]).then(function(answers) {
        var logInChoice = answers.bamazonOption;
        // console.log(logInChoice);
        if (logInChoice === 'Customer Menu') {
            customerMainMenu();
        } else {

            inquirer.prompt([{
                type: 'password',
                message: 'Please enter the manager\'s password: ',
                name: 'manager1'
            }]).then(function(answers) {
                var passwordCheck = answers.manager1;
                if (passwordCheck === 'manager1') {
                    managerMainMenu();
                } else {
                    console.log('Incorrect password. Please try again.\n');
                    mainMenu();
                }
            });


        }
    });
}

mainMenu();

module.exports = mainMenu;
