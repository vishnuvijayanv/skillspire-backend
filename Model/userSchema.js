const mongoose = require('mongoose')

//create schema

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    },
    uType:{
        type:String,
        required:true
    },
   
   
    skills:{
        type:String
    },
    rates:{
        type:String
    },
  
   
    category:{
        type:String
    },
    about:{
        type:String

    },

    education:{
        type:String
    },
    services:{
        type:String
    },
    profile:{
        type:String

    },
    address:{
        type:String
    },
    phone:{
        type:Number
    },
    termsnconditions:{
        type:String
    },
    updated:{
        type: Boolean,
        default: false
    }


})
//create model

const users = mongoose.model("users",userSchema)


module.exports = users