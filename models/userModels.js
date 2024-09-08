const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  active: Boolean,
  firstName: String,
  lastName: String,
  sub: String,
  avatar: Buffer,
  email: String,
  timestamp: Date,
}, { collection: 'user' });

module.exports = (connection) => connection.model('User', userSchema);