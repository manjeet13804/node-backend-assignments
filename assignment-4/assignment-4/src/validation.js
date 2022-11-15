const express = require('express')
const app = express()
const bodyParser = require("body-parser");
app.use(express.urlencoded());
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
function validation(){
app.use((req,res,next)=>{
if(req.body.num2==0){
    res.json({
        message:"cannot divide by zero"
    })
}
if(req.body.num1<-1000000 || req.body.num2<-1000000){
    res.json({
        message:"underflow"
    })
}
if(req.body.num1>1000000 || req.body.num2>1000000){
    res.json({
        message:"overflow"
    })
}
if(typeof(req.body.num1==String||req.body.num2==String)){
    res.json({
        message:"Invalid data type"
    })
}
next()
})
}
module.exports=validation;