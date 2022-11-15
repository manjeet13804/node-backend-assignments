const express = require("express");
const router = express.Router()

const Blog = require("../models/Blog");




router.get("/blog", (req, res) => {
    res.json({
        ok: "blog"
    })
})






module.exports = router;
