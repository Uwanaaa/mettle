import {userCollection,findUser} from './database/database.js'
import mailer from 'nodemailer'
import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import bcrypt from 'bcrypt'
import fs from 'fs'


import ('crypto').then(() => {})


const server = express()
const PORT = 3000

server.use(cors())
server.use(bodyParser.urlencoded({extended:true}))
server.use(express.json())

server.get('/',(req,res) => {
    res.send('Server is up')
})

server.post('/user/signup/',async (req,res) => {
    let{username,email,password} = req.body
    //res.send('Message received')
    console.log(req.body)

    //Check if user already exists
    const userExist = await userCollection.findOne({name:username,email:email})
    if(userExist){
        console.log('User exist')
        return res.send({userStatus:'User exist',pass:false})
    }else{
        //Hashing the password
        bcrypt.hash(password,13).then(async (hashPassword) => {
        password = hashPassword
        
        await userCollection.insertOne({name:username,email:email,password:password})
        console.log(password)

        return res.send({userStatus:'User created',pass:true,url:true})
     })
    }
})

server.post('/user/login/', async (req,res) => {
    let{input,password} = req.body

    try{
        const username = await userCollection.findOne({$or:[{name:input},{email:input}]})

        if(username){//To check user login if they used username
        const passwordCheck = await bcrypt.compare(password,username.password)

            if(passwordCheck){
                return res.send({loginStatus:'Logged in sucessfully',pass:true,url:true})
                console.log('Logged in successfully')
                console.log(username._id)
            }else{
                return res.send({loginStatus:'Password does not match',pass:false})
                console.log('Password does not match')
            }
          
        console.log(username._id)
        }
        //res.send('Logged in successfully')
    }catch(err){
        return res.send({loginStatus:'User does not exist'})
        console.log('User does not exist')
        console.log(err)
    }
})


server.get('/watch/:videoId',async(req,res) => {
    const videoId = req.params.videoId

    const fileReadStream = fs.createReadStream('../frontend/mettle/src/assets/The Gemini Lie.mp4',{start,end})
    const size = fs.statSync('../frontend/mettle/src/assets/The Gemini Lie.mp4').size

    res.writeHead(206,{
        'content-range':'bytes ',
        'accept-ranges':'bytes',
        'content-length': size,
        'content-type':'video/mp4'
    })
})

server.post('/forgot-password',(req,res) => {
    const {email} = req.body

    //Generate verification code
    const code = crypto.randomBytes(3).toString('hex')

    //Send code to user's email
    sendMail(email,code)

    res.send({messsge: "Your verification code has been sent to your mail"})
})
server.use(express.static('../frontend/mettle/dist'))

server.listen(PORT,() => {
    console.log("Listening at port", PORT)
})

module.exports = server
