const User =  require('../models/user.model');
const bcrypt = require('bcrypt');
const { EMPTY, throwError } = require('rxjs');

async function insert(user) {
    user.hashedPassword = bcrypt.hashSync(user.newPassword, 10);
    delete user.password;
    user.username = user.newUsername;
    // make a mongoose db call to save user in db and
    // console.log(`saving user to db`, user);
    return await new User(user).save();
}

async function getUserByUsernameAndPassword(currentUsername, currentPassword) {
    let user = await User.findOne({ username: currentUsername });
    // console.log(user);
    if( isUserValid(user, currentPassword, user.hashedPassword)) {
        user = user.toObject();
        delete user.hashedPassword;
        // console.log(user);
        return user;
    }
    else {
        return throwError;
    }
}

async function getUserById(id) {
    let user = await User.findById(id);
    if(user) {
        user = user.toObject();
        delete user.hashedPassword;
        return user;
    }
    else {
        return null;
    }
}

async function getAllUser() {
    let users = await User.find({});
    if(users) {
        return users;
    }
    else {
        return null;
    }
}

async function updateUser(user) {
    let userMatch = await User.findOne({ username: user.username });
    if(isUserValid(userMatch, user.password, userMatch.hashedPassword)) {
        return User.updateOne(
            { username: user.username },
            {
                $set: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    mobileNumber: user.mobileNumber,
                    email: user.email
                }
            }
        );
    }
    else {
        return throwError;
    }
}

function isUserValid(user, currentPassword, hashedPassword) {
    return user && bcrypt.compareSync(currentPassword, hashedPassword);
}

module.exports = {
    insert,
    getUserByUsernameAndPassword,
    getUserById,
    getAllUser,
    updateUser
};