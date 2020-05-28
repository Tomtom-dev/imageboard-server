const {Router} = require('express');
const User =require("../models").user;
const bcrypt= require("bcrypt")

const {toJWT} = require('../auth/jwt')

const router= new Router();

router.post('/login', async (req,res,next) => {

  //1 get params => email and password and validate.

  const {email, password}= req.body;

  if( !email || !password){
    res.status(400).send('Missing login parameters')
  }else{
     //2 Look in our DB for user with the email.
    const user = await User.findOne({where : { email}})
    // if no user found, user doesn't exist
    if(!user){
      res.status(404).send('User with that email address not found')
    }else {
     //3 check if password match
      const passwordMatch= bcrypt.compareSync(password,user.password)
      if(passwordMatch){
        const token = toJWT({userId: user.id});// => userid
        //this guy exist and we have to log him in
        //create a jwt.
        res.send({token})
      }else{
        res.status(400).send("wrong password")
      }
    }
    
  }
})

module.exports= router;