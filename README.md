#mySQL_StoreFront

##Overview

This application incorporates mySQL, node and javascript to create a functioning local mySQL based version of Amazon, affectionately called Bamazon.  The app functions in two different modes: customer and manager. In the customer view, you are able to view the available mechandise and make purchases. In the manager view, you have access to the database in various ways which will allow modifications and higher level functionality.

##Dependencies

This application uses several npm packages:

	*mysql*
	*inquirer*
	*console.table*

##Customer View

The customer view provides an interface that allows you to browse and shop with ease. 

1. Once you select 'Customer Menu' from the main menu you are taken to a page containing the current contents of Bamazon:

			item_id  product_name          department_name   price  stock_quantity
			-------  --------------------  ----------------  -----  --------------
			1        Cat Footy Pajamas     Pet Attire        30     25            
			2        120 V Laser Light     Party Gear        40     8             
			3        Bedazzled Saddle      Riding Equipment  100    25            
			4        Pleather G-String     Clothing          15     30            
			5        Dog Dinosaur T-Shirt  Pet Attire        25     10            
			6        Crate of Pop Rocks    Food              150    3             
			7        Crate of Soylent      Food              200    29            
			8        Donut Squeaky Toy     Pet Supplies      15     3             
			9        Modal Slanket         Home Decor        75     34            
			10       Dr. Scholls Slippers  Clothing          100    14            
			11       Polish Sausage        Food              10     25            
			12       Cat Nip Deluxe        Pet Supplies      45     51            
			13       Gladiator Sandals     Clothing          70     12            
			14       Foie Gras             Food              200    3             
			15       Michaela's Sofa       Furniture         150    1             
			16       Cholera Medicine      Pharmacy          67     5             
			17       Glitter Nail Polish   Beauty            5      40   

2. You are then prompted to enter the ID number of the item you wish to buy. Your input is validated to ensure that the input is a valid ID number matching an item currently available.

		? Welcome to Bamazon! Please enter the ID of the product you would like to buy:  1

3. Once you select your item, you are prompted to enter the quantity of the selected item you wish to purchase. Again, this input is validated to ensure that a number greater than 0 and less than the available stock is entered. 

		? How many would you like to buy? 3

4. After making your purchase you will see a message telling you what you have just bought and how much it cost. 

		You have purchased 3 Cat Footy Pajamas(s)
		You have spent $90

5.You will then be asked if you would like to place another order:

		? Would you like to place another order? (Use arrow keys)
		❯ Yes 
		  No 

6. From there you can either buy another item or exit the program.

		? Would you like to place another order? No
		Thanks for visiting! Have a lovely day.

##Manager View

The manager view provides an interface that allows you to perform 4 essential tasks: View Products for Sale, View Low Inventory, Update Inventory, or Add New Product.

1. In order to view the manager interface, you must have the manger's password. This password is validated on the main menu page.

		? Welcome to Bamazon!! What type of experience would you like to have? Manager Menu
		? Please enter the manager's password:  ********

2. Once the password is verified you are taken to the Manager Menu.

		? Welcome to the manager view. What would you like to do? (Use arrow keys)
		❯ View Products for Sale 
		  View Low Inventory 
		  Update Inventory 
		  Add New Product 
		  Exit 

3. From there, you will choose one of the above listed tasks to perform.