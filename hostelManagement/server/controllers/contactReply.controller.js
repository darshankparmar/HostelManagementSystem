const ContactReply  =  require('../models/ContactReply.model');

async function insertContactReply(contactReply) {
    // console.log(`saving contactReply to db`, contactReply);
    return await new ContactReply(contactReply).save();
}

async function contactReplyHistory() {
    let contactReplyHistory = await ContactReply.find({});
    if(contactReplyHistory) {
        return contactReplyHistory;
    }
    else {
        return throwError;
    }
}

module.exports = {
    insertContactReply,
    contactReplyHistory
};
