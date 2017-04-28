create database Bamazon;

use Bamazon;

create table products(
item_id integer(11) auto_increment not null,
product_name varchar(100) not null,
department_name varchar(100) not null,
price integer(11) not null,
stock_quantity integer(11) not null,
primary key (item_id)
)

insert into products (product_name, department_name, price, stock_quantity)
values ('Cat Footy Pajamas','Pet Attire', 30, 15);

insert into products (product_name, department_name, price, stock_quantity)
values ('120 V Laser Light','Party Gear', 40, 10);

insert into products (product_name, department_name, price, stock_quantity)
values ('Bedazzled Saddle','Riding Equipment', 100, 25);

insert into products (product_name, department_name, price, stock_quantity)
values ('Pleather G-String','Clothing', 15, 30);

insert into products (product_name, department_name, price, stock_quantity)
values ('Dog Dinosaur T-Shirt','Pet Attire', 25, 10);

insert into products (product_name, department_name, price, stock_quantity)
values ('Crate of Pop Rocks','Food', 150, 5);

insert into products (product_name, department_name, price, stock_quantity)
values ('Crate of Soylent','Food', 200, 20);

insert into products (product_name, department_name, price, stock_quantity)
values ('Donut Squeaky Toy','Pet Supplies', 15, 3);

insert into products (product_name, department_name, price, stock_quantity)
values ('Modal Slanket','Home Decor', 75, 50);

insert into products (product_name, department_name, price, stock_quantity)
values ('Dr. Scholls Slippers','Clothing', 100, 7);
