const Price =  require('../models/price.model');

async function getHostelPriceDetails() {
    let priceDetails = await Price.findOne({});
    
    if(priceDetails) {
        priceDetails = priceDetails.toObject();
        return priceDetails;
    }
    else {
        return throwError;
    }   
}

async function updatePriceDetails(priceDetails) {
    return Price.updateOne(
        {  },
        {
            $set: {
                superDeluxe: priceDetails.superDeluxe,
                deluxe: priceDetails.deluxe,
                standard: priceDetails.standard,
                foodPackage: priceDetails.foodPackage,
                electricityBillPerUnit: priceDetails.electricityBillPerUnit,
                securityDeposit: priceDetails.securityDeposit
            }
        }
    );
}

module.exports = {
    getHostelPriceDetails,
    updatePriceDetails
};