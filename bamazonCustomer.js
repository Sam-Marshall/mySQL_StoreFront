var config = require('./config.js');
var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection(config);

require('console.table');

connection.connect(function(error) {
    if (error) throw error;
});

function customerMainMenu() {
    connection.query('SELECT * FROM products', function(error, response) {

        if (error) throw error;

        console.table(response);

        inquirer.prompt([{
            name: 'idPurchase',
            message: 'Welcome to Bamazon! Please enter the ID of the product you would like to buy: '
        }, {
            name: 'units',
            message: 'How many would you like to buy?'
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

            console.log('Insufficient quantity!');
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
    connection.end();
}


customerMainMenu();

// connection.end();
