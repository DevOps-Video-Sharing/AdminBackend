const express = require('express');
const { getComments } = require('../controllers/commentController');

const router = express.Router();

module.exports = (CommentModel) => {
  router.get('/', (req, res) => getComments(req, res, CommentModel));
  return router;
};