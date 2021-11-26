const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    // _id: { type: String, required: true, primaryKey: true},
    username: { type: String, required: true, unique: true},
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    mobileNumber: { type: String, required: true},
    email: { type: String, required: true, match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email']},
    hashedPassword: { type: String, required: true},
    role: {type: String, required: true, enum: ['User', 'Employee', 'Admin'], default: 'User'},
    createdAt: { type: Date, required: true, default: Date.now}
});

module.exports = mongoose.model('User', UserSchema);
