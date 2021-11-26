const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const priceController = require('../controllers/price.controller');

router.get('/findHostelPriceDetails', asyncHandler(getHostelPriceDetails), price);
router.post('/updatePriceDetails', asyncHandler(updatePriceDetails), msg);


async function getHostelPriceDetails(req, res, next) {
    const price = req.body;
    const priceDetails = await priceController.getHostelPriceDetails();
    // console.log(priceDetails);
    req.price = priceDetails;
    next();
}

async function updatePriceDetails(req, res, next) {
    const price = req.body;
    // console.log('updating price details', price);
    req.msg = await priceController.updatePriceDetails(price);
    if(!req.msg.acknowledged) {
        req.msg = "Error: Price Details Not Updated Successfull";
    }
    else {
        req.msg = "Price Details Update Successfully done!";
    }
    next();
}

function price(req, res) {
    const price = req.price;
    res.json({ 
        price   
    });
}

function msg(req, res) {
    const msg = req.msg;
    res.json({ 
        msg   
    });
}

module.exports = router;