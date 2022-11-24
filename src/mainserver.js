const db = require("./db/db")
const express = require("express");
const app = express();
const cors = require("cors")
const userRouter = require("./routes/user");
const postRouter = require("./routes/post");
app.use(cors())
app.use(express.json());
app.use("/user", userRouter)
app.use("/post", postRouter)
app.listen(5001, async () => {
    await db.sync()
    console.log("Server Listening")
})