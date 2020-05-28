const {Router} = require("express");
const bcrypt = require('bcrypt')

const User = require("../models").user;

const router= new Router()

router.get("/", async(req,res,next)=>{
    try{
        console.log("request received");
        const allUsers= await User.findAll();
        console.log("user fetched from db", allUsers);
        res.send(allUsers)
    }catch (error){
        next(error);
    }
})

//CRUD operation as http methods ==> create 
router.post("/", async (req,res,next)=>{
  try{
    const{email,password,fullName} =req.body;

   
    if(!email || !password || !fullName){
      //1 check if we have the params or something is missing
      res.status(400).send("missing some users parameters")
    }else{
       //2. hash the password ==> encrypt
      const hashedPassword= bcrypt.hashSync(password, 10)
      //3try to create a user (this might fail because of mail uniqueness)
      const newUser= await User.create({
        email,
        password : hashedPassword,
        fullName
      });
      res.send(newUser)
    }
  }catch(error){
    next(error)
  }
})


module.exports= router;