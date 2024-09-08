const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: String,
  author: String,
  userName: String,
  videoId: String,
  userId: String,
  number: Number,
  likes: Number,
  dislikes: Number,
}, { collection: 'comment' });

module.exports = (connection) => connection.model('Comment', commentSchema);