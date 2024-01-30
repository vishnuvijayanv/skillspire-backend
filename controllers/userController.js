const users = require('../Model/userSchema')
const jwt = require('jsonwebtoken')

exports.register =async (req,res)=>{
    console.log("inside register fn");
    const {firstName , lastName ,email,password,confirmPassword,uType} = req.body
    try{ const existUser = await users.findOne({email})
    
    if(existUser){
        //if documnet present
        res.status(406).json('Account Already Exist ....Please Login')  //unproccessble entity
    }
    else{
        //need to register
          //1)create a object for the modal
          const newUser = new users({
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            uType,
            skills:"",
            rates:"",
            category:"",
            about:"",
            education:"",
            services:"",
            profile:"",
            address:""
           
            
          })

          //add mongo db - use save method in mongoose

          await newUser.save()
            
        res.status(200).json(newUser)

    }

 }   
 catch(err){
    res.status(401).json(`Register request Failed due to ${err}`)
 }

}


exports.login =async (req,res)=>{
  console.log("inside login fn");
  const {email,password,confirmPassword} = req.body
  try{ const existUser = await users.findOne({email,password,confirmPassword})
  
  if(existUser){
    const token = jwt.sign({userId:existUser._id},"secretKey1234")  //sending as object beacause we are sending more than one data
    //if documnet present
    console.log(token);
    res.status(200).json({
      existUser,
      token
    })  
  }
  else{
    res.status(400).json('invalid credentials please try again')


  }

}   
catch(err){
  res.status(401).json(`login request Failed due to ${err}`)
}

}

exports.profileUpdate = async(req,res)=>{
  const {userId} = req.params
  const {id} = req.payload
  console.log(userId);
  const {skills,rates,category,about,education,services,profile} = req.body
  const uploadedProjectImage = req.file.filename
  try{
    const updateProfile = await users.findByIdAndUpdate({_id:userId},{skills,rates,category,about,education,services,profile:uploadedProjectImage},{new:true})

    await updateProfile.save()
    res.status(200).json(updateProfile)

}catch(err){
    res.status(401).json(err)
}

}



exports.empUpdate = async(req,res)=>{
  console.log("inside update");
  const {userId} = req.params
  console.log(`id is ${userId}`);
  const {firstName,category,about,phone,email,address,profile,termsnconditions} = req.body
  const uploadedProjectImage = req.file.filename
  try{
    const empUpdate = await users.findByIdAndUpdate({_id:userId},{firstName,category,about,phone,email,address,termsnconditions,profile:uploadedProjectImage},{new:true})

    await empUpdate.save()
    res.status(200).json(empUpdate)

}catch(err){
    res.status(401).json(err)
}

}