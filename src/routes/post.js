const { Post, User } = require("../models/index")
const { Router }= require("express");

const postRouter = Router();

// to gather all the post created by a user
postRouter.get("/", (req, res)=> {
})


// route to create a post
postRouter.post("/", async (req, res)=> {
const post = Post.create(req.body)

res.send("Todo created")
})



// route to update a post
postRouter.put("/update/:id", async (req,res) => {
    const post = await Post.findOne ({ where: { id: (req.params.id)}})
    const updatepost = await post.update({
        Text: req.body.Text
    })
res.send(updatepost)
})

// route to delete a post
postRouter.delete("/delete/:id" ,async (req,res) => {

    const post = await Post.findByPk(req.params.id)
    
    const deletepost = await post.destroy()

    res.send(deletepost)
})
module.exports = postRouter;