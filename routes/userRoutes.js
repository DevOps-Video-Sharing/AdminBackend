const express = require('express');
const { getUsers } = require('../controllers/userController');

const router = express.Router();

module.exports = (UserModel) => {
  router.get('/', (req, res) => getUsers(req, res, UserModel));
  return router;
};