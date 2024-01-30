const mongoose = require("mongoose")

const jobSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    rates:{
        type:Number,
        required:true
    },
    skills:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    userId:{
        type:String,

    }
})



const jobs = mongoose.model("jobs",jobSchema)
module.exports = jobs