import {MongoClient} from 'mongodb'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import esmConfig from '../esm.config.js'
import esm from 'esm'


dotenv.config()

const URI = process.env.URI

//import { URI } from './config.js'

//console.log(URI)
const mongodbURI = URI

const client  = new MongoClient(mongodbURI)


mongoose.connect(mongodbURI)
.then(console.log('Database connected sucessfully'))
.catch((err) => {
    console.error(err)
    console.log('There was an error when trying to connect to the database')
})

//Defining the schema for the database
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const users = mongoose.model('user',userSchema)

//Function to check for user
export const findUser = (input,password) => {
  try{
    const username = users.find({name:input,password:password})
    username.exec()
    .then((user) => {
        return user
    }).catch((err) => {
        const email = users.find({email:input,password:password})
       
        return ( email.exec())
    })
  }catch(e){
    console.error(e)
  }
}

export const userCollection = client.db('Metube').collection('Users')


