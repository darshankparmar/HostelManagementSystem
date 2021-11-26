const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const contactReplyController = require('../controllers/contactReply.controller');

router.post('/addContactReply', asyncHandler(insert), msg);
router.get('/contactReplyHistory', asyncHandler(history), contactReplyHistory);

async function insert(req, res, next) {
    const contactReply = req.body;
    req.contactReply = await contactReplyController.insertContactReply(contactReply);
    if(!req.contactReply) {
        req.msg = "Error: Entry Not Successfull";
    }
    else {
        req.msg = "Successfully done!";
    }
    next();
}

async function history(req, res, next) {
    req.contactReplyHistory = await contactReplyController.contactReplyHistory();
    next();
}

function msg(req, res) {
    const msg = req.msg;
    res.json({
        msg
    });
}

function contactReplyHistory(req, res) {
    const contactReplyHistory = req.contactReplyHistory;
    res.json({
        contactReplyHistory
    });
}

module.exports = router;