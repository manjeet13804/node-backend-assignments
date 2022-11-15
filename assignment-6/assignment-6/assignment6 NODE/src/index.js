const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config()

 mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true },{ useUnifiedTopology: true },()=> {
    console.log("Connected to DB")
})


app.listen(3000,()=> {
    console.log("Server is running")
})

