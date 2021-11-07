
const { MongoClient } = require('mongodb');

const uri =  "mongodb+srv://csu2:hello@cluster0.grt87.mongodb.net/todo-app?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect();

const db = client.db('todo-app')

module.exports = db;