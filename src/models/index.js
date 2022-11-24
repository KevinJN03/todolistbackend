const { REPL_MODE_SLOPPY } = require("repl");
const Post = require("./post")
const User = require("./User")

Post.belongsTo(User);
User.hasMany(Post);

module.exports = { Post, User }