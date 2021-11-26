const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const contactController = require('../controllers/contact.controller');

router.post('/contactUsInsert', asyncHandler(insert), msg);
router.get('/contactUsHistory', asyncHandler(history), contactHistory);

async function insert(req, res, next) {
    const contactForm = req.body;
    // console.log('inserting contact form data', contactForm);
    req.contactForm = await contactController.insertContactForm(contactForm);
    if(!req.contactForm) {
        req.msg = "Error: Entry Not Successfull";
    }
    else {
        req.msg = "Successfully done!";
    }
    next();
}

async function history(req, res, next) {
    req.contactHistory = await contactController.contactHistory();
    next();
}

function msg(req, res) {
    const msg = req.msg;
    res.json({
        msg
    });
}

function contactHistory(req, res) {
    const contactHistory = req.contactHistory;
    res.json({
        contactHistory
    });
}

module.exports = router;
