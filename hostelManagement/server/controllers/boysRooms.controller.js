const boysSuperDeluxeRooms = require('../models/boysRooms/boysSuperDeluxeRooms.model');
const boysDeluxeRooms = require('../models/boysRooms/boysDeluxeRooms.model');
const boysStandardRooms = require('../models/boysRooms/boysStandardRooms.model');


async function superDeluxeAvailability() {
    let total = await boysSuperDeluxeRooms.find({ isStatus: { $eq: false } });
    // console.log(total);
    return total;
}

async function deluxeAvailability() {
    let total = await boysDeluxeRooms.find({ isStatus: { $eq: false } });
    return total;
}

async function standardAvailability() {
    let total = await boysStandardRooms.find({ isStatus: { $eq: false } });
    return total;
}

async function updateSuperDeluxe(student) {
    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;

    return await boysSuperDeluxeRooms.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}

async function updateDeluxe(student) {
    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;
    
    return await boysDeluxeRooms.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}

async function updateStandard(student) {
    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;
    
    return await boysStandardRooms.updateOne(
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