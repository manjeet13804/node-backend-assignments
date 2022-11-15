const express=require("express");
const bodyParser=require("body-parser")
const Player = require("../models/player")
const Offer = require("../models/offer")
const jwt = require("jsonwebtoken")
const router=express.Router()
router.use(bodyParser())
router.get("/",async(req,res)=>{
    try{
        const token = req.headers.authorization.split("secret ")[1]
        if (token) {
            jwt.verify(token, "secret", async function (err, decoded) {
                if (err) {
                    return res.json({
                        status: "Failed",
                        message: err.message
                    })
                }
                const player=decoded.data
                const {page=1,records=10,attribute="offer_title",query="Diwali"}=req.query
                const offerdata=await Offer.findOne()//({
                //     attribute:query
                // })//.skip((Number(page)-1)*records).limit(records)
                let targetArr = offerdata.target.split(" ")                
                const ageValue = targetArr[2];
                 const installedValue = targetArr[6];
                 const offerPlayer = await Player.find({
                    age : {$gt: ageValue},
                    installed_days: {$lt: installedValue}
                 })
                 console.log(ageValue,installedValue,offerPlayer)
                // console.log(offerdata.target);
                // console.log(player);
                res.send("ok")
            })
        }else{
            return res.status(400).json({
              status:"Failed",
              message:"Invalid user"
            })
        }
    
    }catch(err){
        res.json({
            status:"Falied",
            message: err.message
        })
    }
})
router.post("/",async(req,res)=>{
    try {
        //  console.log(req.body)
        const offerData =await Offer.create(req.body);
        res.json({
        status: "success",
        offerData
    })
    res.end()
  }  catch (e) {
        res.json({
        status:"Falied",
        message: e.message
    })
}
});
module.exports=router