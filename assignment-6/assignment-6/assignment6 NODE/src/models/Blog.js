const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    tname : String,
    description : String,
    posted_at : String,
    posted_by : String,
    status : Boolean
})

const Blog = mongoose.model("blogs",blogSchema);

module.exports = Blog;