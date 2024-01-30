//import mongoose

const mongoose = require('mongoose')

//access server with the mongodb

const connectionString = process.env.REACT_APP_DATABASE

//connect server with the mongodb

mongoose.connect(connectionString).then(()=>{
    console.log('mongodb connected successfully');
}).catch((err)=>{
    console.log(`connection failed due to:${err}`);
})