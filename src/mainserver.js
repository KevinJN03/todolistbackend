const db = require("./db/db")
const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const postRouter = require("./routes/post");

app.use(express.json());
app.use("/user", userRouter)
app.use("/post", postRouter)
app.listen(3000, async () => {
    await db.sync()
    console.log("Server Listening")
})