const mongoose = require('mongoose');
const Temperature = require('../models/temperatureModel')
const pH_Level = require('../models/phLevelModel')
const Turbidity  = require('../models/temperatureModel')


const parameterReadingsSchema = new mongoose.Schema({
 
  temperature_value: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Temperature
  },
  ph_value: {
    type: mongoose.Schema.Types.ObjectId,
    ref: pH_Level
  },
  turbidity_value: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Turbidity
  }
});

module.exports = mongoose.model('ParamReadings', parameterReadingsSchema);