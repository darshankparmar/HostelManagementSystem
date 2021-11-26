const express = require('express');
const authRoutes = require('./auth.route');
const studentRoutes = require('./student.route');
const contactRoutes = require('./contact.route');
const boysRoomsRoutes = require('./boysRooms.route');
const girlsRoomsRoutes = require('./girlsRooms.route');
const priceDetailsRoutes = require('./priceDetails.route');
const contactReplyRoutes = require('./contactReply.route');
const usersRoutes = require('./users.route');

const router = express.Router();

// localhost:4050/api/
router.use('/auth', authRoutes);
router.use('/student', studentRoutes);
router.use('/contactUs', contactRoutes);
router.use('/boysRooms', boysRoomsRoutes);
router.use('/girlsRooms', girlsRoomsRoutes);
router.use('/prices', priceDetailsRoutes);
router.use('/contactReply', contactReplyRoutes);
router.use('/users', usersRoutes);

module.exports = router;
