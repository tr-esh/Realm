const TemperatureReading = require('../models/temperatureModel')
const TurbidityReading = require('../models/turbidityModel')
const phLevelReading = require('../models/phLevelModel')



const postTemperature = async (req, res) => {
    const { IoT_module, sensor_code, sensor_type, parameter_name, temperature_value, status } = req.body

    try {
        const reading = await TemperatureReading.create({ IoT_module, sensor_code, sensor_type, parameter_name, temperature_value, status })
        res.status(200).json(reading)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const postTurbidity = async (req, res) => {
    const { IoT_module, sensor_code, sensor_type, parameter_name, ntu_value, status } = req.body

    try {
        const reading = await TurbidityReading.create({ IoT_module, sensor_code, sensor_type, parameter_name, ntu_value, status  })
        res.status(200).json(reading)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const postpHLevel = async (req, res) => {
    const { IoT_module, sensor_code, sensor_type, parameter_name, ph_value, status  } = req.body

    try {
        const reading = await phLevelReading.create({ IoT_module, sensor_code, sensor_type, parameter_name, ph_value, status  })
        res.status(200).json(reading)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getParameters = async (req, res) => {
    
    try {
        const temp = await TemperatureReading.find({status: /^Warning: Rising Temperature/}).sort({createdAt: -1})
        const turbid = await TurbidityReading.find({status: /^Warning: High Turbid/}).sort({createdAt: -1})
        const ph = await phLevelReading.find({status: /^Caution: Acidic/}).sort({createdAt: -1})

        const Params = [...temp, ...turbid, ...ph]

        res.status(200).json(Params)
        
    } catch (error) {
        res.status(500).json({message: 'Cannot get all the request'})
    }    
}




const getTemp = async (req, res) => {
        
        const temp = await TemperatureReading.find({}).sort({createdAt: -1})
        res.status(200).json(temp)
}

const getTurbidity = async (req, res) => {
    
        const turbid = await  TurbidityReading.find({}).sort({createdAt: -1})
        res.status(200).json(turbid)
}

const getph = async (req, res) => {
        
    const phlevel = await phLevelReading.find({}).sort({createdAt: -1})
    res.status(200).json(phlevel)
}


module.exports = { postTemperature, postTurbidity, postpHLevel, getTemp, getTurbidity, getph, getParameters }