const { Post, User } = require("../models/index")
const { Router }= require("express");
const seed = require("../db/seed");

const postRouter = Router();

// to gather all the post created by a user
postRouter.get("/", async (req, res)=> {
    await seed()
    res.status(200).send({todo: await Post.findAll() })
})


// route to create a post
postRouter.post("/", async (req, res)=> {
await Post.create(req.body)
res.status(200).send({todo: await Post.findAll() })
})



// route to update a post
postRouter.put("/update/:id", async (req,res) => {
    const post = await Post.findOne ({ where: { id: (req.params.id)}})
    const updatepost = await post.update({
        Text: req.body.Text
    })
res.status(200).send({todo: await Post.findAll() })
})

// route to delete a post
postRouter.delete("/delete/:id" ,async (req,res) => {

    const post = await Post.findByPk(req.params.id)
    
    const deletepost = await post.destroy()

    res.status(200).send({todo: await Post.findAll() })
})
module.exports = postRouter; 