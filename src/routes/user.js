const { Post, User } = require("../models/index")
const { Router }= require("express");
const userRouter = Router();
userRouter.get("/", (req, res)=> {
res.status(200).send("Hi")
})
// create a user
userRouter.post("/", async (req, res)=> {

    try {
      const user = await User.create(req.body) 
      res.Status(200).send(user)
    } catch (error) {
        res.status(404).send(error)
    }
})
// update a user
userRouter.put("/password/:id",async (req, res)=> {
     const user = User.findOne ({ where: { id: (req.params.id)}})
       
        const updatepassword = await user.update ({
            password: req.body.status
           })
                res.send(updatepassword)
    
})

userRouter.delete("/", (req, res)=> {

})

module.exports = userRouter;