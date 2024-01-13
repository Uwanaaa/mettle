//import { MongoClient } from "mongodb";
const express = require('express');


const server = express()

server.post('/login',(req,res) => {
    return res.send ('Logged in Successfully')
})

server.post('/signup',(req,res) => {
    return res.send('Account Created Sucessfully')
})

module.exports = server