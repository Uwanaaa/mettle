const express = require('express')

const server = express()
const PORT = 3000

server.get('/home', (req,res) => {
    res.send({
        "message": "This is the first page"
    })
})
server.listen(PORT,() => {
    console.log("Listening at port", PORT)
})