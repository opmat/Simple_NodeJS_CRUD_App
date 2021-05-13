# Simple NodeJS CRUD Application (nodejs_ass3)
Zuri I4G Training NodeJS Assignment 3

## Question
Create a simple express application that:
1. Connects to a database
2. Creates the payload: 
{ message: String, data: Object }
This means you are to return an object containing a message that tells the client if the request is successful or not, and data object containing your result.
If there's an error in the request, the response should return the error message instead.
3. Get's the data created
4. Updates the data created
5. Deletes the data created

The data you are required to create should contain name, email and country

### Very important:

    You are required to upload your application to github and host it on heroku.
    You are also required to create a simple documentation of your routes in your github readme file
    You are to submit your your github link with the hosted link in the readme file too

### Hint:

Test your routes with postman. Ensure they work
Deploying Node.js Apps on Heroku | Heroku Dev Center


## Prerequisite
This uses NodeJS default modules like *express*, *dotenv*, *mongodb*, *mongoose* and *validator*.

## Getting Started
To deployed this application, you are required to do the following;
1. Create a MongoDB database
2. Create a login credential to the database and have it handy
3. Clone this repository
4. Rename the *.env-sample* file to *.env*
5. Update the .env file content with your database credentials.
6. Run the nodejs application using anyone the commands below

This app runs on port 3333 on localhost. To run the app, simply run the following command on your terminal from within the app directory path;

```
   node index.js

```
or if you wish to run the app from another directory, you will need to specify the full path to the *index.js* file

```
   node *path to index.js file*/index.js
   
```
or if you are on a development system run

```
   npm run dev

```

Then you can access the app through **http://localhost:3333** or **http://127.0.0.1:3333**

## API Documentation
The documentation for the API can be accessed via **https://documenter.getpostman.com/view/8385365/TzRVdR1z** to better understand how to use the API.

## DEMO
A demo of this application has been deployed to Heroku and accessible via **https://zuritask3-crud.herokuapp.com/** and the URL (**https://zuritask3-crud.herokuapp.com/**) serves as the endpoint URL for testing purpose. Check the API Documentation to test the application online.

