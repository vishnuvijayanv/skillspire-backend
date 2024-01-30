const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res,next)=>{
    console.log("inside jwtmiddleware ");
    const token = req.headers['authorization'].split(' ')[1]
    console.log(token);

   try{ const jwtResponse = jwt.verify(token,"secretKey1234")
    console.log(jwtResponse);
    req.payload = jwtResponse.userId
    console.log(req.payload);
    next()}
    catch(err){
        res.status(401).json("Authorization failed ....pleasse login")
 
    }

}

module.exports = jwtMiddleware
