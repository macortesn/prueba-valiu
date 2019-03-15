const mongoose = require('mongoose')

const RateSchema = mongoose.Schema({
  etag: String,
  last:String,
  base: String,
  rates: Object,
  date: String ,
  timestamp:String 
});

module.exports =  mongoose.model('Rate', RateSchema);
