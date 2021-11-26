const girlsSuperDeluxeRooms = require('../models/girlsRooms/girlsSuperDeluxeRooms.model');
const girlsDeluxeRooms = require('../models/girlsRooms/girlsDeluxeRooms.model');
const girlsStandardRooms = require('../models/girlsRooms/girlsStandardRooms.model');

async function superDeluxeAvailability() {
    let total = await girlsSuperDeluxeRooms.find({ isStatus: { $eq: false } });
    return total;
}

async function deluxeAvailability() {
    let total = await girlsDeluxeRooms.find({ isStatus: { $eq: false } });
    return total;
}

async function standardAvailability() {
    let total = await girlsStandardRooms.find({ isStatus: { $eq: false } });
    return total;
}

async function updateSuperDeluxe(student) {
    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;
    
    return await girlsSuperDeluxeRooms.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}

async function updateDeluxe(student) {
    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;
    
    return await girlsDeluxeRooms.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}

async function updateStandard(student) {
    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;
    
    return await girlsStandardRooms.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}

module.exports = {
    superDeluxeAvailability,
    deluxeAvailability,
    standardAvailability,
    updateSuperDeluxe,
    updateDeluxe,
    updateStandard
};