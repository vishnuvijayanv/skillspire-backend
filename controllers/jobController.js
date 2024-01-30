const jobs = require("../Model/jobSchema")


const users = require("../Model/userSchema")

exports.addJobs = async (req,res)=>{

    const userId = req.payload
    console.log(userId);
    const {title,category,image,description,rates,skills,type} = req.body
    const jobImage = req.file.filename 
    try{
        const jobExist = await jobs.findOne({title,category,image,description,rates,skills,type}) 

        if (jobExist) {
            res.status(406).json(`"Oops! It looks like the job  already exists in our system. Can you please make sure you haven't added it before? If you have any questions or need assistance, feel free to contact our support team."`)
            
        }

        else{
            const newJob = new jobs({
                title,
                category,
                image:jobImage,
                description,
                rates,
                skills,
                type,
                userId

            })
            await newJob.save()
            res.status(200).json(newJob)
        }

    }
    catch(err){
        res.status(401).json(err)
    }
    
}

exports.getAllProjects=async(req,res)=>{
    const userId = req.payload
    try{
        const myjobs = await jobs.find({userId})
        console.log(myjobs);
        res.status(200).json(myjobs)

    }
    catch(err){
        res.status(406).json(err)
    }
}


exports.updateJob=async(req,res)=>{
    console.log("inside job controller");
    const {id} = req.params
    console.log(id);

    const {title,category,image,description,rates,skills,type,userId} = req.body
    console.log(req.body);
    const jobImg = req.file?req.file.filename:image
    try{
        const editJob = await jobs.findByIdAndUpdate({_id:id},{title,category,image:jobImg,description,rates,skills,type,userId},{new :true})

        await editJob.save()
        res.status(200).json(editJob)
    }catch(err){
        res.status(401).json(err)
    }

}


exports.deleteJob=async(req,res)=>{
    const {id} = req.params
    console.log(id);
    try{
        const deleteAJob=await jobs.findByIdAndDelete({_id:id})
        res.status(200).json(deleteAJob)
    }catch(err){
        res.status(401).json(err)
    }
}

exports.getAllJobs=async(req,res)=>{
    const search = req.query.search
    console.log(search);
    const query = {
        title:{
            //regular expression,options :'i'-it removes the case sensitivity
            $regex:search,$options:'i'
        }
    }
    try{
        const myjobs = await jobs.find(query)
        console.log(myjobs);
        res.status(200).json(myjobs)

    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.getAJob = async(req,res)=>{
    const {id} = req.params
    console.log('hi',id);
    try{
        const aJobData = await jobs.find({_id:id})
        console.log(aJobData[0].userId,"hi");
        // const userData = await users.find({_id:aJobData[0].userId})
        // console.log(userData);

        res.status(200).json(aJobData)

    }
    catch(err){
        res.status(401).json(err)


    }
}