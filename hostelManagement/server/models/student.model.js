const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    roomCategory : { type: String, required: true },
    roomNo: { type: Number, required: true },
    personNo: { type: Number, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    fatherName: { type: String, required: true },
    gender: { type: String, required: true, enum: ['male', 'female']},
    mobileNo: { type: Number, required: true },
    fatherMobileNo: { type: Number, required: true },
    email: { type: String, required: true, match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email']},
    studentAdharCard: { type: Number, required: true },
    fatherAdharCard: { type: Number, required: true },
    currentAdress: { type: String, required: true },
    collegeName: { type: String, required: true },
    isStatus: { type: Boolean, required: true, default: true }, 
    joinDate: { type: Date, required: true, default: Date.now}
});

module.exports = mongoose.model('Student', StudentSchema);
