const applies = require('../Model/applySchema')


exports.appliedJobs=async(req,res)=>{
    console.log("test1");
    const {userID,jobID,name,email,skills,jobTitle,category,rates,profile,jobDesc,status,time} = req.body
    console.log(req.body);
    try{
        const exists = await applies.findOne({userID,jobID})
        if (exists) {
            res.status(406).json("Already Applied")

        }
        else{
            const applyjob=new applies({
                userID,
                jobID,
                name,
                email,
                skills,
                jobTitle,
                category,
                rates,
                profile,
                jobDesc,
                status,
                time
            })
            await applyjob.save()
            res.status(200).json(applyjob)
        }


    }
    catch(err){
        res.status(401).json(err)
    }

}

exports.getAllRequest=async(req,res)=>{
    const userId = req.payload
    try{
        const myjobs = await applies.find()
        console.log(myjobs);
        res.status(200).json(myjobs)

    }
    catch(err){
        res.status(406).json(err)
    }
}

exports.getUserRequest=async(req,res)=>{
    const userId = req.payload
    try{
        const myjobs = await applies.find({userID:userId})
        console.log(myjobs);
        res.status(200).json(myjobs)

    }
    catch(err){
        res.status(406).json(err)
    }
}

exports.statusUpdate=async(req,res)=>{
    const {id}= req.params
    console.log(id);
    console.log(req.body);
    try{
        const {userID,jobID,name,email,skills,jobTitle,category,rates,profile,jobDesc,status,time} = req.body
        const statusChange =await applies.findByIdAndUpdate({_id:id},{userID,jobID,name,email,skills,jobTitle,category,rates,profile,jobDesc,status,time},{new:true}) 
        await statusChange.save()
        res.status(200).json(statusChange)

    }
    catch(err){ 
        res.status(401).json(err)
    }
}
