const mongoose = require('mongoose');

const PriceSchema = new mongoose.Schema({
    standard: { type: Number, required: true },
    deluxe: { type: Number, required: true },
    superDeluxe: { type: Number, required: true },
    foodPackage: { type: Number, required: true },
    electricityBillPerUnit: { type: Number, required: true },
    securityDeposit: { type: Number, required: true }
});

module.exports = mongoose.model('Price', PriceSchema);
