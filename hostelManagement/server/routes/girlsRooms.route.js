const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const girlsRoomsController = require('../controllers/girlsRooms.controller');

router.get('/superDeluxeRooms', asyncHandler(superDeluxeAvailability), total);
router.get('/deluxeRooms', asyncHandler(deluxeAvailability), total);
router.get('/standardRooms', asyncHandler(standardAvailability), total);

async function superDeluxeAvailability(req, res, next) {
    req.total = await girlsRoomsController.superDeluxeAvailability();
    next();
}

async function deluxeAvailability(req, res, next) {
    req.total = await girlsRoomsController.deluxeAvailability();
    next();
}

async function standardAvailability(req, res, next) {
    req.total = await girlsRoomsController.standardAvailability();
    next();
}

function total(req, res) {
    let total = req.total;
    res.json({ 
        total
    });
}

module.exports = router;

