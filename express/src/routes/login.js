
const express = require('express');
const user = express.Router();

const userHandler = require('../controllers/user');

user.post('/register', userHandler.registerUser);

user.post('/update', userHandler.updateUser);

user.post('/login', userHandler.userLogin);

module.exports = user;