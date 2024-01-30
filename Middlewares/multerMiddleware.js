
//import multer

const multer = require('multer')
//diskStorage is used to create storage place 
const storage = multer.diskStorage({
    //destination : where location in which the file is stored
    destination:(req,file,callback)=>{ 
        callback(null,'./uploads')//to set
        
    },
    //file name : the name in which the file is stored
    filename:(req,file,callback)=>{
      const filename = `image-${Date.now()}-${file.originalname}`
      callback(null,filename)
    }

})

//types of files
const fileFilter = (req,file,callback)=>{
    if(file.mimetype==='image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'){
        callback(null,true)
    }
    else{
        callback(null,false)
        return callback(new Error('only png,jpg,jpeg  files are allowed'))
    }

}

//create multer config

const multerConfig = multer({
    storage,    
    fileFilter
})

module.exports = multerConfig