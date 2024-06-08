const mongoose = require("mongoose")

const db = async () => {
    await mongoose.connect("mongodb+srv://prathabagtharia:pratha1911@cluster0.apj2mzk.mongodb.net/blogData");
    console.log("Data base is connected");
}

module.exports = db;