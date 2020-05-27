const {Router} = require("express");
const User = require("../models").user;
const bcrypt = require('bcrypt')


const router= new Router()

router.get("/", async(req,res,next)=>{
    try{
        console.log("request received");
        const allUsers= await User.findAll();
        console.log("user fetched from db", allUsers);
        res.json(allUsers)
    }catch (error){
        next(error);
    }
})

router.post("/", async (req, res, next) => {
    try {
      const { email, password, fullName } = req.body;
      if (!email || !password || !fullName) {
        res.status(400).send("missing parameters");
      } else {
        const newUser = await User.create({
          email,
          password: bcrypt.hashSync(password, 10),
          fullName
        });
        res.json(newUser);
      }
    } catch (e) {
      next(e);
    }
  });

module.exports= router;