const express = require ('express')
const router =  express.Router()
const Rate = require('../models/rate')

router.get('/rates',(req,res, next) =>{
  console.log(req.query);
  Rate.find().then((rates)=>{
    res.json(rates);
  }).catch(err => console.log(err))
})

//
router.get('/rates/convert',async function(req,res, next){
  var lastRate= await Rate.findOne({}, {}, { sort: { '_id' : -1 } }).exec();
  var valueFrom = lastRate.rates[req.query.from];
  var valueTo = lastRate.rates[req.query.to];
  var amount = req.query.amount;
  console.log(req.query.from);
  console.log(valueFrom);
  console.log(req.query.to);
  console.log(valueTo);
  
  var result = (amount*valueTo)/valueFrom;
  res.json({
    result:result
  })

  // Rate.find().then((rates)=>{
  //   res.json(rates);
  // }).catch(err => console.log(err))
})

module.exports = router;
