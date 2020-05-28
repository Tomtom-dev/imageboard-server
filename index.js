const express = require('express');
const cors= require("cors")
const app=express();
const port = 4000;
const jsonParser= express.json();
const authRouter= require('./routers/auth')
const imageRouter= require("./routers/image")
const userRouter = require("./routers/user")

app.use(jsonParser)
app.use(cors())

app.use("/users", userRouter);
app.use("/images", imageRouter);
app.use("/auth", authRouter);

app.listen(port, () => console.log(`listeninn on port ...${port}`))