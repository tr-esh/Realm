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


const fetchParameters = async (req, res) => {

    // try {
    //     const temp = await TemperatureReading.find({})
    //     const turbid = await  TurbidityReading.find({})
    //     const phlevel = await phLevelReading.find({})
        
    //     const Parameters = [...temp, ...turbid, ...phlevel]

    //      // Create a new array with data for all three parameters
    //     const data = Parameters.map((param) => ({
    //     id: param._id, // Use a unique identifier for each row
    //     type: param.parameter_name, // Add a column for the parameter type
    //     value: [param.temperature_value, param.ntu_value, param.ph_value],
    //     status: param.status, // Add a column for the parameter value
    //     createdAt: param.createdAt, // Add a column for the created date
    //     }));
  
    //     res.status(200).json(data);

    //     // res.status(200).json(Parameters)

    // } catch (error) {
    //     res.status(500).json({message: 'Cannot get all the request'})
    // }
    try {
        const [temp, turbid, phlevel] = await Promise.all([
          TemperatureReading.find({}),
          TurbidityReading.find({}),
          phLevelReading.find({})
        ]);
    
        const parameters = [...temp, ...turbid, ...phlevel];
    
        const data = parameters
          .filter((parameter) => parameter.temperature_value || parameter.ntu_value || parameter.ph_value)
          .map(({ _id, sensor_type, parameter_name, temperature_value, ntu_value, ph_value, status, createdAt }) => ({
            id: _id,
            sensor: sensor_type,
            type: parameter_name,
            value: [temperature_value, ntu_value, ph_value].filter(Boolean),
            status,
            createdAt,
          }));
    
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ message: 'Cannot get all the request' });
      }
}

    // try {
    //     const temp = await TemperatureReading.aggregate([
    //       {
    //         $group: {
    //           _id: { $month: "$createdAt" },
    //           count: { $sum: 1 }
    //         }
    //       }
    //     ]);
    //     const turbid = await TurbidityReading.aggregate([
    //       {
    //         $group: {
    //           _id: { $month: "$createdAt" },
    //           count: { $sum: 1 }
    //         }
    //       }
    //     ]);
    //     const phlevel = await phLevelReading.aggregate([
    //       {
    //         $group: {
    //           _id: { $month: "$createdAt" },
    //           count: { $sum: 1 }
    //         }
    //       }
    //     ]);
    
    //     const countsByMonth = {};
    //     [...temp, ...turbid, ...phlevel].forEach((data) => {
    //       const month = data._id;
    //       if (!countsByMonth[month]) {
    //         countsByMonth[month] = data.count;
    //       } else {
    //         countsByMonth[month] += data.count;
    //       }
    //     });
    
    //     res.status(200).json({
    //       countsByMonth,
    //       parameters: [...temp, ...turbid, ...phlevel],
    //     });
    //   } catch (error) {
    //     res.status(500).json({ message: "Cannot get all the request" });
    //   }
    // };


    // try {
    //     const date = new Date();
    //     const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    //     const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59, 999);

    //     const temp = await TemperatureReading.find({
    //     createdAt: {
    //         $gte: startOfMonth,
    //         $lte: endOfMonth
    //     }
    //     }).sort({createdAt: -1});

    //     const turbid = await TurbidityReading.find({
    //     createdAt: {
    //         $gte: startOfMonth,
    //         $lte: endOfMonth
    //     }
    //     }).sort({createdAt: -1});

    //     const phlevel = await phLevelReading.find({
    //     createdAt: {
    //         $gte: startOfMonth,
    //         $lte: endOfMonth
    //     }
    //     }).sort({createdAt: -1});

    //     const Parameters = [...temp, ...turbid, ...phlevel];

    //     res.status(200).json(Parameters);

    // } catch (error) {
    //     res.status(500).json({message: 'Cannot get all the request'})
    // }


module.exports = { fetchTemp, fetchTurbidity, fetchph, fetchParameters}
