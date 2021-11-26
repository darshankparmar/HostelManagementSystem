const Student =  require('../models/student.model');
const boysRoomsController = require('./boysRooms.controller');
const girlsRoomsController = require('./girlsRooms.controller');

async function insertStudent(student) {
    // console.log(`saving user to db`, student);
    if(student.gender == "male")
    {
        if(student.roomCategory == "Super Deluxe")
            msg = await boysRoomsController.updateSuperDeluxe(student);
        if(student.roomCategory == "Deluxe")
            msg = await boysRoomsController.updateDeluxe(student);
        if(student.roomCategory == "Standard")
            msg = await boysRoomsController.updateStandard(student);
    }
    else if(student.gender == "female")
    {
        if(student.roomCategory == "Super Deluxe")
            msg = await girlsRoomsController.updateSuperDeluxe(student);
        if(student.roomCategory == "Deluxe")
            msg = await girlsRoomsController.updateDeluxe(student);
        if(student.roomCategory == "Standard")
            msg = await girlsRoomsController.updateStandard(student);
    }

    if(!msg.acknowledged) {
        req.msg = "Error: Student Details Not Updated Successfull";
        return;
    }
    return await new Student(student).save();
}

async function viewStudent() {
    // console.log(`serching student on db`);
    let student = await Student.find({});
    if(student) {
        return student;
    }
    else {
        return throwError;
    }
}

async function updateStudent(student) {
    // console.log(`updating student on db`);
    return Student.updateOne(
        { roomNo: student.roomNo },
        {
            $set: {
                firstName: student.firstName,
                lastName: student.lastName,
                fatherName: student.fatherName,
                mobileNo: student.mobileNo,
                fatherMobileNo: student.fatherMobileNo,
                email: student.email,
                studentAdharCard: student.studentAdharCard,
                fatherAdharCard: student.fatherAdharCard, 
                currentAdress: student.currentAdress,
                collegeName: student.collegeName
            }
        }
    );
}

async function removeStudent(student) {
    console.log(student);
    if(student.gender == "male")
    {
        if(student.roomCategory == "Super Deluxe")
            msg = await boysRoomsController.updateSuperDeluxe(student);
        if(student.roomCategory == "Deluxe")
            msg = await boysRoomsController.updateDeluxe(student);
        if(student.roomCategory == "Standard")
            msg = await boysRoomsController.updateStandard(student);
    }
    else if(student.gender == "female")
    {
        if(student.roomCategory == "Super Deluxe")
            msg = await girlsRoomsController.updateSuperDeluxe(student);
        if(student.roomCategory == "Deluxe")
            msg = await girlsRoomsController.updateDeluxe(student);
        if(student.roomCategory == "Standard")
            msg = await girlsRoomsController.updateStandard(student);
    }

    if(!msg.acknowledged) {
        req.msg = "Error: Student Details Not Remove Successfull";
        return;
    }

    return Student.updateOne( 
        { personNo: student.personNo },
        {
            $set: {
                isStatus: false
            }
        }    
    );
}


module.exports = {
    insertStudent,
    viewStudent,
    updateStudent,
    removeStudent
};
