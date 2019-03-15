const express = require ('express')
const router =  express.Router()
const axios = require('axios')
const Rate = require('../models/rate')

var key = "b5679e20c243cb65512b66b40f295a89"

exports.getFixer =  async function(){
  var lastRate=await Rate.findOne({}, {}, { sort: { '_id' : -1 } }).exec();
  let headersReq;
  if (lastRate) {
    headersReq = {
      'If-None-Match':lastRate.etag,
      'If-Modified-Since':lastRate.last
    };
  };
  axios.get('http://data.fixer.io/api/latest?access_key='+ key, {headers:headersReq}).then(
    response =>{
      let rate= new Rate();
      rate.etag=response.headers.etag
      rate.last=response.headers['last-modified']
      rate.base=response.data.base
      rate.rates=response.data.rates
      rate.timestamp=response.data.timestamp
      rate.date=response.data.date
      rate.save();
      console.log("Rates added");
    }
  ).catch(
    error =>{
      if (error.response.status == 304) {
        console.log("Rates are updated");
      }
      else {
        console.log(error);
      }

    }
  )
}
