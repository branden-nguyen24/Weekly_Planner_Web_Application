const db = require('../db/db');
const weekTemplate = require('../db/weekPlanner')

const UserModel = {};

UserModel.create = (username, name, password) => {
    return db.collection('TodoList')
        .insertOne({
            username: username,
            name: name,
            password: password,
            weekPlanner: weekTemplate
        })
        .then((response) => {
            if (response.insertedId) {
                return Promise.resolve(response.insertedId)
            }
        })
        .catch((err) => {
            console.log("user could not be created")
            console.log(err)
        })
}

UserModel.usernameDoesExist = (username) => {
    return db.collection('TodoList')
        .find({name:username})
        .toArray()
        .then((docs) => {
            return Promise.resolve(!(docs.length === 0))
        })

        .catch((err) => {
            console.log("username is already taken")
            console.log(err)
            Promise.reject(err)
        })
}

UserModel.authenticate = (username, password) => {
    return db.collection('TodoList')
        .find({username:username})
        .toArray()
        .then((docs) => {
            console.log(docs);
            if(docs && docs.length ==1) {
                return([password === docs[0].password,docs[0].name]);
            }
            else {
                
                return Promise.resolve(-1);
            }
        })
        .then((passwordMatch) => {
            if(passwordMatch[0]) {
                return Promise.resolve(passwordMatch[1]);
            } else {
                return Promise.resolve(false)
            }
        })
        .catch((err) => {
            console.log("password is wrong")
            console.log(err)
            Promise.reject(err)
        })
}

module.exports = UserModel