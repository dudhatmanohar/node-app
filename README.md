This project is a  **RESTful API** built using **Node.js, Express.js, and MySQL**.  
It supports **CRUD operations** for managing categories and products.

-->MySQl server is connected as a database
---------------------------------*************************---------------------------

###    INSTALLATION AND SETUP##
-->>npm install{install all dependencies} module like={dotenv,express,body-parser,multer,mysql2}

--> clone the repository

    git clone https://github.com/dudhatmanohar/Node-Immverse.git
    cd node-assignment

---------------------------------------*********************-------------------------------------
## MYSQL ##
CREATE DATABASE assignment;
->> create the table category and products.

------------------------------------------*******************---------------------------
## API TESTING ###

--> use postman for testing the endpoints
--> http://localhost:3000/api/products
-->http://localhost:3000/api/categories

## Category APIs

Method	Endpoint	Description

POST	/categories	Add a new category

GET	/categories	List all categories

PUT	/categories/:id	Update category

DELETE	/categories/:id	Delete category

## Product APIs

Method	Endpoint	Description

POST	/products	Add a new product

GET	/products	List all products

PUT	/products/:id	Update product

DELETE	/products/:id	Delete product

## Run the server at local host 3000
## node server.js
