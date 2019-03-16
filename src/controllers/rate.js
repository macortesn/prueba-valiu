const Rate = require('../models/rate')

exports.allRates = async(req, res) => {
    try {
      let result = await Rate.find().exec();
      res.status(200).send({
        data: result
      });
    } catch (e) {
        res.status(500).send({
          message: e.message
        });
    }
};

exports.convertAmount = async(req,res) =>{
  try {
    let lastRate= await Rate.findOne({}, {}, { sort: { '_id' : -1 } }).exec();
    let result = (req.query.amount*lastRate.rates[req.query.to])/lastRate.rates[req.query.from];
    let rate=result/req.query.amount;
    res.status(200).send({
      data:{
          result: result,
          rate: rate
      }
    })
  } catch (e) {
    res.status(500).send({
      message: e.message
    });
  }
}
