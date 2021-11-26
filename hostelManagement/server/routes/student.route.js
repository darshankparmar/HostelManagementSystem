const express = require('express');
const studentController = require('../controllers/student.controller');
const asyncHandler = require('express-async-handler');
const router = express.Router();

// localhost:4050/api/student/
router.post('/addStudent', asyncHandler(insertStudent), student);
router.post('/updateStudent', asyncHandler(updateStudent), msg);
router.post('/removeStudent', asyncHandler(removeStudent), msg);
router.get('/viewStudent', asyncHandler(viewStudent), student);

async function insertStudent(req, res, next) {
    const student = req.body;
    // console.log('registering student', student);
    req.student = await studentController.insertStudent(student);
    if(!req.student) {
        req.msg = "Error: Student Entry Not Successfull";
    }
    else {
        req.msg = "Student Entry Successfully done!";
    }
    next();
}

async function updateStudent(req, res, next) {
    const student = req.body;
    // console.log('updating student', student);
    req.msg = await studentController.updateStudent(student);
    if(!req.msg.acknowledged) {
        req.msg = "Error: Student Details Not Updated Successfull";
    }
    else {
        req.msg = "Student Details Update Successfully done!";
    }
    next();
}

async function removeStudent(req, res, next) {

    const student = req.body;
    req.msg = await studentController.removeStudent(student);

    if(!req.msg.acknowledged) {
        req.msg = "Error: Student Details Not Remove Successfull";
    }
    else {
        req.msg = "Student Details Remove Successfully!";
    }

    next();
}

async function viewStudent(req, res, next) {
    // console.log(`searching student...`);
    req.student = await studentController.viewStudent();
    if(!req.student) {
        req.msg = "Student Not Found";
    }
    else {
        req.msg = "Student Found Successfully!";
    }
    // console.log(req.msg);
    // console.log(req);
    next();
}

function student(req, res) {
    const student = req.student;
    const msg = req.msg;
    res.json({ 
        student,
        msg   
    });
}

function msg(req, res) {
    const msg = req.msg;
    res.json({ 
        msg   
    });
}

module.exports = router;
