const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const boysRoomsController = require('../controllers/boysRooms.controller');

router.get('/superDeluxeRooms', asyncHandler(superDeluxeAvailability), total);
router.get('/deluxeRooms', asyncHandler(deluxeAvailability), total);
router.get('/standardRooms', asyncHandler(standardAvailability), total);

async function superDeluxeAvailability(req, res, next) {
    req.total = await boysRoomsController.superDeluxeAvailability();
    next();
}

async function deluxeAvailability(req, res, next) {
    req.total = await boysRoomsController.deluxeAvailability();
    next();
}

async function standardAvailability(req, res, next) {
    req.total = await boysRoomsController.standardAvailability();
    next();
}

function total(req, res) {
    let total = req.total;
    res.json({ 
        total
    });
}

module.exports = router;

