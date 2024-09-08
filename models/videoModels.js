const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  filename: String,
  fileType: String,
  fileSize: String,
  file: Buffer,
  description: String,
  userID: String,
  thumbnail: Buffer,
  userName: String,
  videoName: String,
}, { collection: 'fs.files' });

module.exports = (connection) => connection.model('Video', videoSchema);