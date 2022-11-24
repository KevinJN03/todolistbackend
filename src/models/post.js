const {DataTypes, Model } = require("sequelize")
const db = require("../db/db");

class Post extends Model {}
    Post.init({
        Text: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
    },{
sequelize: db,
        modelname: "Post"
    }
    );
    module.exports = Post;