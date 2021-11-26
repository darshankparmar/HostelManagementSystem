const Contact  =  require('../models/contact.model');

async function insertContactForm(contactForm) {
    // console.log(`saving contactForm to db`, contactForm);
    return await new Contact(contactForm).save();
}

async function contactHistory() {
    let contactHistory = await Contact.find({});
    if(contactHistory) {
        return contactHistory;
    }
    else {
        return throwError;
    }
}

module.exports = {
    insertContactForm,
    contactHistory
};
