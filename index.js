//import .env .it loads .env contents into process.env by default
require('dotenv').config()

//import express

const express = require('express')

//import cors 

const cors = require('cors')
//import router

const router = require('./Routers/router')

//import connections.js

require('./DB/connections')

//call express to create server

const skillServer = express()

//use cores in server to connect frontend and backend

skillServer.use(cors())

//to conver json to js - Returns middleware that only parses json
skillServer.use(express.json())

//use router

skillServer.use(router)
//server use uploads folder
skillServer.use('/uploads',express.static('./uploads'))


const PORT = 4000 || process.env

//to run server

skillServer.listen(PORT,()=>{
    console.log(`SERVER RUNNING SUCCESSFULLY AT PORT NO:${PORT}`);
})

