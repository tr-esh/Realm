const TemperatureReading = require('../models/temperatureModel')
const TurbidityReading = require('../models/turbidityModel')
const phLevelReading = require('../models/phLevelModel')




const fetchTemp = async (req, res) => {
        
    const temp = await TemperatureReading.findOne({}, {_id: 1, parameter_name: 1, temperature_value: 1, status: 1}).sort({createdAt: -1})
    res.status(200).json(temp)
}

const fetchTurbidity = async (req, res) => {

    const turbid = await  TurbidityReading.findOne({}, {_id: 1, parameter_name: 1, ntu_value: 1, status: 1}).sort({createdAt: -1})
    res.status(200).json(turbid)
}

const fetchph = async (req, res) => {
    
const phlevel = await phLevelReading.findOne({}, {_id: 1,  parameter_name: 1, ph_value: 1, status: 1}).sort({createdAt: -1})
res.status(200).json(phlevel)
}


module.exports = { fetchTemp, fetchTurbidity, fetchph }
