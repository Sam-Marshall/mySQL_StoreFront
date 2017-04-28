var config = require('./config.js');
var mysql = require('mysql');
var inquirer = require('inquirer');
require('console.table');
var itemsInStockArray = [];

var connection = mysql.createConnection(config);

connection.connect(function(error) {

    if (error) throw error;

});

connection.query('SELECT * FROM products', function(error, response) {

    if (error) throw error;

    for (var i = 0; i < response.length; i++) {

        itemsInStockArray.push(response[i]);

    }

});

var managerMainMenu = function() {

    inquirer.prompt([{

        type: 'list',
        name: 'mngrOption',
        message: 'Welcome to the manager view. What would you like to do?',
        choices: ['View Products for Sale', 'View Low Inventory', 'Update Inventory', 'Add New Product', 'Exit']

    }]).then(function(answers) {

        var managerChoice = answers.mngrOption;

        switch (managerChoice) {
            case 'View Products for Sale':
                viewAllInventory();
                break;
            case 'View Low Inventory':
                viewLowInventory();
                break;
            case 'Update Inventory':
                updateInventory();
                break;
            case 'Add New Product':
                addNewProduct();
                break;
            case 'Exit':
                exitManagerMenu();
                break;

        }
    });

}

function viewAllInventory() {

    console.log('\n');

    connection.query('SELECT * FROM products', function(error, response) {

        if (error) throw error;

        console.table(response);

        managerMainMenu();

    });

}

function viewLowInventory() {

    console.log('\nAll of these items have less than 5 units remaining in stock: \n')

    connection.query('SELECT * FROM products', function(error, response) {

        if (error) throw error;

        var lowInventoryArray = [];

        for (var i = 0; i < response.length; i++) {
            if (response[i].stock_quantity < 5) {
                lowInventoryArray.push(response[i]);
            }
        }

        console.table(lowInventoryArray);

        managerMainMenu();

    });
}

function updateInventory() {

    console.log('\n');

    connection.query('SELECT * FROM products', function(error, response) {

        if (error) throw error;

        console.table(response);

        inquirer.prompt([{
            type: 'input',
            name: 'item',
            message: 'Enter the ID number for the item for which you would like to update the inventory',
            validate: function validateIDInput(name) {
                if (Number.isInteger(parseFloat(name)) && parseFloat(name) <= itemsInStockArray.length && parseFloat(name) > 0) {
                    return true
                } else {
                    return false;
                }
            }
        }]).then(function(answers) {

            var itemUpdate = answers.item;

            connection.query('SELECT * FROM products WHERE item_id=?', itemUpdate, function(error, response) {

                var currentInventory = parseFloat(response[0].stock_quantity);
                var selectedItemName = response[0].product_name;
                var inStockMessage = ('There are currently ' + currentInventory + ' ' + selectedItemName + ' in stock. How many units would you like to add to this?');

                inquirer.prompt([{
                    type: 'input',
                    name: 'item',
                    message: inStockMessage,
                    validate: function validateIDInput(name) {
                        if (Number.isInteger(parseFloat(name)) && parseFloat(name) > 0) {
                            return true
                        } else {
                            return false;
                        }
                    }

                }]).then(function(answers) {

                    var amountToAdd = parseFloat(answers.item);
                    var newStockAmount = amountToAdd + currentInventory;

                    connection.query('UPDATE products SET ? WHERE ?', [{
                        stock_quantity: newStockAmount
                    }, {
                        item_id: itemUpdate
                    }], function(error, response) {
                        if (error) throw error;
                        console.log('\nThere are now ' + newStockAmount + ' ' + selectedItemName + ' in stock.\n');
                        managerMainMenu();
                    });

                });
            });

        });

    });

}

function addNewProduct() {

    connection.query('SELECT * FROM products', function(error, response) {

        if (error) throw error;

        console.table(response);

        inquirer.prompt([{

            type: 'input',
            name: 'item',
            message: 'What is the name of the item you wish to add to Bamazon?',
            validate: function validateIDInput(name) {
                if (name != '' && isNaN(parseFloat(name))) {
                    return true
                } else {
                    return false;
                }
            }

        }, {

            type: 'input',
            name: 'department',
            message: 'What department is this item in?',
            validate: function validateIDInput(name) {
                if (name != '' && isNaN(parseFloat(name))) {
                    return true
                } else {
                    return false;
                }
            }

        }, {

            type: 'input',
            name: 'price',
            message: 'What is the list price for this item?',
            validate: function validateIDInput(name) {
                if (Number.isInteger(parseFloat(name)) && parseFloat(name) > 0) {
                    return true
                } else {
                    return false;
                }
            }

        }, {

            type: 'input',
            name: 'stockQuantity',
            message: 'How much of this item do we have in stock?',
            validate: function validateIDInput(name) {
                if (Number.isInteger(parseFloat(name)) && parseFloat(name) > 0) {
                    return true
                } else {
                    return false;
                }
            }

        }]).then(function(answers) {

            var newItemName = answers.item;
            var newItemDepartment = answers.department;
            var newItemPrice = parseFloat(answers.price);
            var newItemStock = parseFloat(answers.stockQuantity);

            connection.query('INSERT INTO products SET ?', {

                product_name: newItemName,
                department_name: newItemDepartment,
                price: newItemPrice,
                stock_quantity: newItemStock

            }, function(error, response) {

                if (error) throw error;
                console.log(newItemName + ' added to the stock!');
                managerMainMenu();

            });

        });

    });

}

function exitManagerMenu() {
    console.log('Thanks for visiting! Have a lovely day.');
    connection.end();
}

module.exports = managerMainMenu;
