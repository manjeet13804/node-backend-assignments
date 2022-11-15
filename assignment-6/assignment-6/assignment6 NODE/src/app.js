const express = require("express");
const bodyparse = require("body-parser")
const methodOverride = require('method-override');
const blogroute = require('./routes/blog')
const Blog = require("./models/Blog")
const app = express();

app.use(bodyparse.urlencoded({ extended: true }))
app.use(express.json());
app.use('/', blogroute)
app.set('views', './views')
app.set('view engine', 'ejs')
app.use(methodOverride('_method'))
app.use(express.static("public"))


app.get("/", async (req, res) => {
    try {
        const blogdata = await Blog.find()
        // console.log(blogdata)
        res.render("home.ejs", { blogdata })
    } catch (e) {
        console.log(e.message)
    }

})


app.post("/blog", async (req, res) => {
    try {
        await Blog.create({
            tname: req.body.tname,
            description: req.body.description,
            posted_at: req.body.posted_at,
            posted_by: req.body.posted_by
        })
       const blog=await Blog.find()
        console.log(blog)
    } catch (e) {
        console.log(e.message)
    }

    res.redirect("/")
})

app.put("/blog/:id/complete", async (req, res) => {
    try {
        await Blog.updateOne({ _id: req.params.id }, { status: true })
        res.redirect("/")
    } catch (e) {
        console.log(e.message)
    }

})

app.delete("/blog/:id/delete", async (req, res) => {
    try {
        await Blog.deleteOne({ _id: req.params.id })

    } catch (e) {
        console.log(e.message)
    }
    res.redirect("/")
})

module.exports = app;

