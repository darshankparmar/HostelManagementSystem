const mongoose = require('mongoose');

const ContactReplySchema = new mongoose.Schema({
    contactId: { type: String, required: true },
    username: { type: String, required: true },
    replyMsg: { type: String, required: true },
    repliedAt: { type: Date, required: true, default: Date.now}
});

module.exports = mongoose.model('ContactReply', ContactReplySchema);