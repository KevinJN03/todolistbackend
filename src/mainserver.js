const db = require("./db/db")
const seed = require("../src/db/seed")
const express = require("express");
const cors = require("cors")



const userRouter = require("./routes/user");
const postRouter = require("./routes/post");

const app = express();
app.use(cors())
app.use(express.json());
app.use("/user", userRouter)
app.use("/post", postRouter)
app.listen(5001, async () => {
    await seed();
    console.log("Server Listening")
}) 