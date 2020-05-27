const express = require('express');

const app=express();
const port = 4000;
const jsonParser= express.json();

const imageRouter= require("./routers/image")
const userRouter = require("./routers/user")

app.use(jsonParser)

app.use("/users", userRouter);
app.use("/images", imageRouter)

app.listen(port, () => console.log(`listeninn on port ...${port}`))