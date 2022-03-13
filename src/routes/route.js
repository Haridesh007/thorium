const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController");
const memes = require('../controllers/mems');
const weather = require('../controllers/weatherController')




router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.get("/allweather",weather.allWeather)
router.get("/weather",weather.weather)
router.post("/memecreator",memes.memeCreater)
router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.get("/cowin/findByDistrict",CowinController.getdistrictId)

router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;