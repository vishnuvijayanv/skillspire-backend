const mongoose = require('mongoose')

const applySchema = new mongoose.Schema({
    userID:{
        type:String,
        required:true
    },
    jobID:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    skills:{
        type:String,
        required:true
    },
    jobTitle:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    rates:{
        type:String,
        required:true
    },
    profile:{
        type:String,
        required:true
    },
    jobDesc:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    }

})



const applications = mongoose.model("applications",applySchema)


module.exports = applications