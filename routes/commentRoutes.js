const express = require('express');
const { getComments } = require('../controllers/commentController');
const authenticateToken = require('../middlewares/authMiddleware');


module.exports = (CommentModel) => {
  const router = express.Router();
  router.get('/', authenticateToken ,(req, res) => getComments(req, res, CommentModel));
  return router;
};