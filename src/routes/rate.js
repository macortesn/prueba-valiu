const express = require ('express')
const router =  express.Router()
const Rate = require('../models/rate')
const rateController =  require('../controllers/rate')

router.get('/rates/convert',rateController.convertAmount);
router.get('/rates',rateController.allRates);

module.exports = router;
