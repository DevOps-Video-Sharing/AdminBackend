const express = require('express');
// const { register, login } = require('../controllers/authController');
const {register, login} = require('../controllers/authController');
const router = express.Router();

module.exports = (Admin) => { 
    router.post('/register', (req, res) => register(req, res, Admin));
    router.post('/login', (req, res) => login(req, res, Admin));
    return router;
};