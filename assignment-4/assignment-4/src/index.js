const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
const {validation}=require("./validation")
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// // your code goes here
// const num1=10
// const num2=20

app.get("/add",validation,(req,res)=>{
res.json({
     status: "success",
 message: "the sum of given two numbers", 
sum: num1+num2 
})
})
app.get("/sub",validation,(req,res)=>{
    res.json({
         status: "success",
     message: "the diff of given two numbers", 
    sum: num1-num2 
    })
    })
app.get("/multiply",validation,(req,res)=>{
        res.json({
             status: "success",
         message: "the multiply of given two numbers", 
        sum: num1*num2 
    })
})
app.get("/divide",validation,(req,res)=>{
    res.json({
         status: "success",
     message: "the division of given two numbers", 
    sum: num1/num2 
    })
    })

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;