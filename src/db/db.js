const { Sequelize } = require("sequelize");

const path = require("path")

const db = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, "user.sqlite")
})

module.exports = db;