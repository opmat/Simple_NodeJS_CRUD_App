
# Simple NodeJS CRUD Application

This is the solution to Zuri NodeJS Task 3.

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




## Installation/Getting Started

To deployed this application on a local system, you are required to do the following;
1. Create a MongoDB database
2. Create a login credential to the database and have it handy
3. Clone the repository and initialize with npm init

```bash
  cd cloned-directory
  npm init
```
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
    

## Demo

A demo of this application has been deployed to Heroku and accessible via **https://zuritask3-crud.herokuapp.com** and the URL (**https://zuritask3-crud.herokuapp.com**) serves as the endpoint URL for testing purpose. Check the API Documentation to test the application online.

  
## API Documentation

The [full documentation](https://documenter.getpostman.com/view/8385365/TzRVdR1z) for the API can be accessed via **https://documenter.getpostman.com/view/8385365/TzRVdR1z** to better understand how to use the API.

  
## Environment Variables

To run this project, you will need to add the following environment variables to your *.env* file

`DB_HOST`

`DB_USER`

`DB_PASS`

`DB_NAME`

  
## Usage/Examples
Any of the API endpoints can be accessed using any language of choice. The example below makes a */GET* request on the */users* endpoint using NodeJS. This will return the list of all users existing in the database.  
More examples are available in the API documentation.

```javascript
var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'GET',
  'hostname': 'zuritask3-crud.herokuapp.com',
  'path': '/users',
  'headers': {
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();
```

  
## API Reference
Some of the routes are outlined below, while others can be viewed via https://documenter.getpostman.com/view/8385365/TzRVdR1z

#### Get all users

```http
  GET /users
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| &nbsp; | &nbsp; | &nbsp; |

#### Get user by ID

```http
  GET /user/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. ID of item to fetch |


  