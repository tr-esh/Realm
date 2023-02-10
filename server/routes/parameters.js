const express = require('express')
const { postTemperature, postTurbidity, postpHLevel, getTemp, getTurbidity, getph, getParameters} = require('../controllers/parameterReadingsContoller');

const { fetchTemp, fetchTurbidity, fetchph } = require('../controllers/gettersController')

const router = express.Router()

router.get('/api', function(req, res){
    res.send("hello po");
});


//sensor-based routing
router.post('/sendtemp', postTemperature)
router.post('/sendturbidity', postTurbidity)
router.post('/sendph', postpHLevel)


//get parameters
router.get('/gettemp', getTemp)
router.get('/getturbidity', getTurbidity)
router.get('/getph', getph)

router.get('/getall', getParameters)


//getters 
router.get('/fetchtemp', fetchTemp)
router.get('/fetchntu', fetchTurbidity)
router.get('/fetchph', fetchph)








module.exports = router 