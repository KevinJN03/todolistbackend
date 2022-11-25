const {Post, User }= require("../models/index")
const db = require("../db/db")

async function seed() {
    await db.sync({force: true})
    await Post.bulkCreate([

{
    Text: "kevin Jean"
},

{
    Text: "ad,kb,sfhbvhbd"
},

{
    Text: "adkhbkb,sfhbvhbd"
},

{
    Text: "JBk"
}


    ])
}

module.exports = seed;