const express = require('express');
const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller');
const asyncHandler = require('express-async-handler');
const passport = require('../middleware/passport');
const router = express.Router();

// localhost:4050/api/auth
router.post('/SignUp', asyncHandler(insert), login);
router.post('/SignIn', asyncHandler(getUserByUsernameAndPassword), login);
router.get('/findme', passport.authenticate('jwt',{session:false}), login);

async function insert(req, res, next) {
    const user = req.body;
    // console.log('registering user', user);
    req.user = await userController.insert(user);
    next();
}

async function getUserByUsernameAndPassword(req, res, next) {
    const user = req.body;
    console.log('serching user for', user);

    const savedUser = await userController.getUserByUsernameAndPassword(user.currentUsername, user.currentPassword);
    req.user = savedUser;
    // console.log(req.user);
    next();
}

function login(req, res) {
    const user = req.user;
    const token = authController.generateToken(user);
    res.json({ 
        user,
        token   
    });
}

module.exports = router;