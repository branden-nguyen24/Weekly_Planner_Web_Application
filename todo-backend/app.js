const express = require('express');
const app = express();
const cors = require('cors');

const port = 4000
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const UserModel = require('./models/Users');
const db = require('./db/db');
const week = require('./db/weekPlanner');
const { application } = require('express');

app.use(express.json());
app.use(cookieParser());        // allows server to access cookie to save, read and access

const oneDay = 1000*60*60*24;

app.use(sessions({
    secret: "THISISTHESECRETKEYOFTHESESSION2468",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}))

app.get('/api/login', (req,res) => {
    const username =  req.query.username;
    const password = req.query.password;

    UserModel.authenticate(username,password)
    .then((name) => {
        if(name) {
            req.session.username = req.query.username; 
            res.send(name);
        } else {
            throw Error("INVALID")
        }
    })
    .catch((err) => {
        console.log(err)
        res.send('invalid')
    })
});

app.get('/api/logout',(req,res) => {
    req.session.destroy();
    res.send("logged out")
});

app.get('/api/resetweek', (req,res) => {
    res.send(week)
})     

app.post('/api/register', (req,res) => {
    const username =  req.query.username;
    const name = req.query.name;
    const password = req.query.password;

    UserModel.usernameDoesExist(username)
    .then((userDoesExist) => {
        if(userDoesExist) {
            throw Error(
                "username already exists"
            )
        } else {
            return UserModel.create(username,name,password);
        }
    })
    .then((userId) => {
        if(userId < 0) {
            throw Error(
                "user could not be created"
            )
        } else {
            console.log("User has been successfully made!")
            res.send(userId)
        }
    })
    .catch((err) => {
        console.log(err)
        res.send('invalid')
    })

});                                             

app.get('/api/weekly', (req,res) => {             // getting task list
    db.collection('TodoList')
    .find({username:req.session.username})
    .toArray()
    .then((docs) => {
        console.log(docs);
        res.send(docs[0].weekPlanner)
    })
})

app.post('/api/save', (req,res) => {
    console.log(req.body)
    db.collection('TodoList')
    .updateOne({username:req.body.username},{$set : {weekPlanner:req.body.week}})
    .then((response) => {
       res.send(response.acknowledged)
    })
    .catch((err) => {
        res.send(err)
    })
})

app.listen(port, () => console.log(`Listening on Port ${port}`));