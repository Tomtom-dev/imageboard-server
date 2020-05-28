const {Router} = require("express");
const Image = require("../models").image;


const router= new Router()

router.get("/", async(req,res,next)=>{
    try{
        console.log("request received");
        const allImages= await Image.findAll();
        res.send(allImages)
    }catch (error){
        next(error);
    }
})

// router.post("/", async (req, res, next) => {
//     try {
//       const { title, url } = req.body;
//       if (!title || !url) {
//         res.status(400).send("missing parameters");
//       } else {
//         const newImage = await Image.create(req.body);
//         res.json(newImage);
//       }
//     } catch (e) {
//       next(e);
//     }
//   });
  
//   router.get("/messy", async (req, res, next) => {
//     const auth =
//       req.headers.authorization && req.headers.authorization.split(" ");
//     if (auth && auth[0] === "Bearer" && auth[1]) {
//       try {
//         console.log(auth);
//         const data = toData(auth[1]);
//         console.log(data);
//       } catch (e) {
//         res.status(400).send("Invalid JWT token");
//       }
//       const allImages = await Image.findAll();
//       res.json(allImages);
//     } else {
//       res.status(401).send({
//         message: "Please supply some valid credentials"
//       });
//     }
  // });

  router.get("/", (req, res, next) => {
    const limit = req.query.limit || 1;
    const offset = req.query.offset || 0;
  
    Image.findAndCountAll({ limit, offset })
      .then((result) => res.send({ image: result.rows, total: result.count }))
      .catch((error) => next(error));
  });

module.exports=router;