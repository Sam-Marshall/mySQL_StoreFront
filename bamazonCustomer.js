var config = require('./config.js');
var mysql = require('mysql');
var inquirer = require('inquirer');
require('console.table');

var connection = mysql.createConnection(config);
var itemsInStockArray = [];

connection.connect(function(error) {
    if (error) throw error;
});

connection.query('SELECT * FROM products', function(error, response) {

    if (error) throw error;

    for (var i = 0; i < response.length; i++) {
        itemsInStockArray.push(response[i]);

    }

});

var customerMainMenu = function() {

    console.log('\n');

    connection.query('SELECT * FROM products', function(error, response) {

        if (error) throw error;

        console.table(response);

        inquirer.prompt([{
            type: 'input',
            name: 'idPurchase',
            message: 'Welcome to Bamazon! Please enter the ID of the product you would like to buy: ',
            validate: function validateIDInput(name) {
                if (Number.isInteger(parseFloat(name)) && parseFloat(name) <= itemsInStockArray.length && parseFloat(name) > 0) {
                    return true
                } else {
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'units',
            message: 'How many would you like to buy?',
            validate: function validateIDInput(name) {
                if (Number.isInteger(parseFloat(name)) && parseFloat(name) > 0) {
                    return true
                } else {
                    return false;
                }
            }
        }]).then(function(answers) {
            var itemToBuy = answers.idPurchase;
            var itemQuantity = answers.units;
            checkQuantity(itemToBuy, itemQuantity);
        });
    });

}

function checkQuantity(item, inquiry) {

    connection.query('SELECT * FROM products WHERE item_id=?', item, function(error, response) {

        if (error) throw error;

        var itemStock = parseFloat(response[0].stock_quantity);
        var itemPrice = parseFloat(response[0].price);
        var itemName = response[0].product_name;

        if (inquiry > itemStock) {

            console.log('\nInsufficient quantity!');
            customerMainMenu();

        } else {
            var stockUpdate = itemStock - inquiry;

            connection.query('UPDATE products SET ? WHERE ?', [{
                stock_quantity: stockUpdate
            }, {
                item_id: item
            }], function(error, response) {
                if (error) throw error;
                console.log('You have purchased ' + inquiry + ' ' + itemName +
                    '(s)');
                console.log('You have spent $' + (inquiry * itemPrice));
                inquirer.prompt([{
                    type: 'list',
                    name: 'another',
                    message: 'Would you like to place another order?',
                    choices: ['Yes', 'No']
                }]).then(function(answers) {
                    var anotherPurchase = answers.another;
                    if (anotherPurchase === 'Yes') {
                        customerMainMenu();
                    } else {
                        exitOrdering();
                    }
                });

            });

        }
    });

}

function exitOrdering() {
    console.log('Thanks for visiting! Have a lovely day.');
    connection.end();
}


module.exports = customerMainMenu;
