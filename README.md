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

	a. View Products for Sale: Choosing this option will bring up a table showing you what is currently avaiable to buy in the Bamazon store.

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

			i. And then you will be taken back to the main Manager Menu

			? Welcome to the manager view. What would you like to do? (Use arrow keys)
			❯ View Products for Sale 
			  View Low Inventory 
			  Update Inventory 
			  Add New Product 
			  Exit 

	b. View Low Inventory: Choosing this option will bring up a table showing you what items are currently available with less than 5 units in stock.

			All of these items have less than 5 units remaining in stock: 

			item_id  product_name        department_name  price  stock_quantity
			-------  ------------------  ---------------  -----  --------------
			6        Crate of Pop Rocks  Food             150    3             
			8        Donut Squeaky Toy   Pet Supplies     15     3             
			14       Foie Gras           Food             200    3             
			15       Michaela's Sofa     Furniture        150    1  

			i. And then you will be taken back to the main Manager Menu

			? Welcome to the manager view. What would you like to do? (Use arrow keys)
			❯ View Products for Sale 
			  View Low Inventory 
			  Update Inventory 
			  Add New Product 
			  Exit 

	c. Update Inventory: Choosing this option will allow you to update the stock_quantity of a prexisting item in the Bamazon stock.

		i. First you will be shown the current stock.

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

		ii. Then you will be prompted to enter the ID number of the item you wish to update. Your input is validated to ensure that the input is a valid ID number matching an item currently available.

			? Enter the ID number for the item for which you would like to update the inventory 

		iii. Next you will be shown a message telling you how many of that item there are in stock, and prompted to enter a number to update the stock. Your input is validated to assure that you enter a valid number that is larger than 0.

			? There are currently 3 Foie Gras in stock. How many units would you like to add to this? 

		iv. Finally you will be shown a message telling you that the stock has been updated.

			There are now 4 Foie Gras in stock.

		v. And taken back to the main Manager Menu

			? Welcome to the manager view. What would you like to do? (Use arrow keys)
			❯ View Products for Sale 
			  View Low Inventory 
			  Update Inventory 
			  Add New Product 
			  Exit 

	d. Add New Product: Choosing this option will allow you to add a new item to the Bamazon stock
		
		i. First you will be shown the current stock.

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

		ii. Then you will be prompted to enter the product name of the item you would like to add to the store.

			? What is the name of the item you wish to add to Bamazon? 

		iii. Next you will be prompted to enter the department name of the new item.

			? What department is this item in?

		iv. Then you will be prompted to enter the price for the new item.

			? What is the list price for this item?

		v. Next you will be asked to enter the stock amount of your new item.

			? How much of this item do we have in stock?

		vi. Finally you will be shown a message telling you that the item has been added to the store

			Velveteen Rabbit added to the stock!

		vii. And taken back to the main Manager Menu

			? Welcome to the manager view. What would you like to do? (Use arrow keys)
			❯ View Products for Sale 
			  View Low Inventory 
			  Update Inventory 
			  Add New Product 
			  Exit 