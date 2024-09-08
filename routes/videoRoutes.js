const express = require('express');
const { getVideos } = require('../controllers/videoController');

const router = express.Router();

module.exports = (VideoModel) => {
  router.get('/', (req, res) => getVideos(req, res, VideoModel));
  return router;
};