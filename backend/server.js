const express = require('express')
const accounts = require('./account-route') 


const server = express()
const PORT = 3000

server.use('/account', accounts)

server.get('/home', (req,res) => {
    res.send({
        "message": "This is the first page"
    })
})

server.use(express.static('../frontend/mettle/dist'))

server.listen(PORT,() => {
    console.log("Listening at port", PORT)
})
