const express = require("express");
const bodyParser = require("body-parser")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Player = require("../models/player")
const { body, validationResult } = require("express-validator")
const router = express.Router()
router.use(bodyParser())
router.post("/register", body("player_id").isEmail(), body("password").isLength({ min: 6, max: 16 }),
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ error: errors.array() })
            }
            bcrypt.hash(req.body.password, 10, async (err, hash) => {
                if (err) {
                    return res.status(400).json({ status: "failed", message: err.message })
                }
                else {
                    const player = await Player.create({
                        player_id: req.body.player_id,
                        password: hash,
                        age: req.body.age,
                        country: req.body.country,
                        installed_days: req.body.installed_days,
                        coins: req.body.coins,
                        gems: req.body.gems,
                        game_level: req.body.game_level,
                        purchaser: req.body.purchaser,
                    })
                    res.status(201).json({
                        status: "success",
                        message: "Registration successful"

                    })
                }
            })
        } catch (err) {
            res.status(500).json({
                status: "failed",
                message: err.message
            })
        }
    })
router.get("/login", async (req, res) => {
    try {
        const checkPlayer = await Player.findOne({ player_id: req.body.player_id })
        if (!checkPlayer) {
            return res.status(400).json({
                status: "Login failed",
                message: "Invalid user"
            })
        }
        bcrypt.compare(req.body.password, checkPlayer.password, async (err, result) => {
            if (err) {
                res.status(500).json({
                    status: "failed",
                    message: err.message
                })
            }
            if (result) {
                const token = jwt.sign({
                    exp: Math.floor(Date.now()/1000) + (60 * 60),
                    data: checkPlayer.player_id
                },"secret");
                res.status(201).json({
                    status: "Sucess",
                    message: "Login Sucessful",
                    token
                })
            }
            else{
                res.json({
                    status: "failed",
                    message: "Invalid credential",
                })
            }
        })
    } catch (err) {
        res.status(500).json({
            status: "failed",
            message: err.message
        })
    }
});
module.exports = router