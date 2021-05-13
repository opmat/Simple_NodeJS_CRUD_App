const express = require('express');
// const MongoClient = require('mongodb').MongoClient;
const conf = require('dotenv').config();
const mongoose = require('mongoose');
const validator = require('validator');
const User = require('./usermodel.js')

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const connectstr = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(connectstr, 
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
.then(() => {
    console.log('Database connection established');

    // Route Definition
    app.get('/', function(req, res) {
        res.json({message:'Welcome to the API, kindly use the documentation to access the correct endpoint'});
    });

    app.get("/users", async (req, resp) => {
        const users = await User.find({});
      
        try {
          resp.status(200).json({message: "Request Successful", data: users});  //.send(users);
        } catch (error) {
          resp.status(500).json({message: error.message}); //.send(error);
        }
    });

    app.get("/user/:id", async (req, resp) => {
        try {
            var user = await User.findById(req.params.id); //.exec();
            resp.status(200).json({message: "Request Successful", data: user});
        } catch (error) {
            resp.status(500).json({message: error.message}); 
        }
    });

    app.get("/user/search/:searchby/:searchval", async (req, resp) => {
        try {
            var searchobject;
            var regex = new RegExp(["^", req.params.searchval, "$"].join(""), "i");
            // console.log(regex);
            switch (req.params.searchby) {
                case "name":
                    searchobject = {name: regex};
                    break;
                case "email":
                    searchobject = {email: regex};
                    break;                
                case "country":
                    searchobject = {country: regex};
                    break;
            }
            var users = await User.find(searchobject); //.exec();
            resp.status(200).json({message: "Request Successful", data: users});
        } catch (error) {
            resp.status(500).json({message: error.message}); 
        }
    });

    app.post("/user", async (req, resp) => {
        const user = new User(req.body);
        
        try {
          await user.save();
          resp.status(200).json({message: "Request Successful", data: user});  //.send(user);
        } catch (error) {
          resp.status(500).json({message: error.message}); //.send(error);
        }
    });

    app.patch("/user/:id", async (req, resp) => {
        try {
          var userrec = await User.findByIdAndUpdate(req.params.id, req.body);
          await userrec.save();
          var user = await User.findById(req.params.id);
          resp.status(200).json({message: "Request Successful", data: user});
        } catch (error) {
          resp.status(500).status(500).json({message: error.message}); //.send(error);
        }
    });

    

    app.patch("/user/email/:email", async (req, resp) => {
        try {
            var regex = new RegExp(["^", req.params.email, "$"].join(""), "i");
            await User.findOneAndUpdate({email: regex}, req.body);
            var user = await User.find({email: regex});
            resp.status(200).json({message: "Request Successful", data: user});
        } catch (error) {
            resp.status(500).status(500).json({message: error.message}); //.send(error);
        }
    });

    app.delete("/user/:id", async (req, resp) => {
        try {
            var user = await User.deleteOne({ _id: req.params.id });
            resp.status(200).json({message: "Request Successful", data: user});
        } catch (error) {
            resp.status(500).status(500).json({message: error.message});
        }
    });


    // app.get("*", (req, res) => {
    //     res.status(404).json({message: "Invalid Request"});
    // });

    // this matches all routes and all methods
    app.use((req, res, next) => {
        res.status(404).json({message: "Invalid Request: Not Found"});
    });

})
.catch(err => {
    console.error('Database connection could not be established');
    res.status(500).json({message: "Database connection could not be established"});
})


var port = process.env.PORT || 3333;
app.listen(port, function() {
    console.log('listening on 3333');
  });