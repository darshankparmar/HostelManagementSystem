const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const userController = require('../controllers/user.controller');
const multer = require('multer');
var fileExtension = require('file-extension');
var storage = multer.diskStorage({

    // Setting directory on disk to save uploaded files
    destination: function (req, file, cb) {
        cb(null, './src/assets/img/profileImg')
    },

    // Setting name of file saved
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

var upload = multer({
    storage: storage,
    limits: {
        // Setting Image Size Limit to 50MBs
        fileSize: 50000000
    },
    fileFilter(req, file, cb) {
        console.log(file);
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            //Error 
            cb(new Error('Please upload JPG and PNG images only!'))
        }
        //Success 
        cb(undefined, true)
    }
});


router.get('/AllUser', asyncHandler(getAllUser), users);
router.post('/userUpdate', asyncHandler(updateUser), msg);
router.post('/updateProfilePic',upload.single('uploadedImage'), (req, res, next) => {
    
    let file = req.file;
    if (!file) {
        const error = new Error('Please upload a file');
        error.httpStatusCode = 400;
        return next(error);
    }
    res.status(200).send({
        statusCode: 200,
        status: 'success',
        uploadedFile: file
    });

}, (error, req, res, next) => {
    res.status(400).send({
        error: error.message
    });
});

async function getAllUser(req, res, next) {
    req.users = await userController.getAllUser();
    next();
}

async function updateUser(req, res, next) {
    const user = req.body;
    req.msg = await userController.updateUser(user);
    if(!req.msg.acknowledged) {
        req.msg = "User Details Not Updated Successfull !! Please Check Your Password";
    }
    else {
        req.msg = "User Details Update Successfully done!";
    }
    next();
}

function users(req, res) {
    const users = req.users;
    res.json({ 
        users   
    });
}

function msg(req, res) {
    const msg = req.msg;
    res.json({ 
        msg   
    });
}

module.exports = router;