const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectCommentDB = async () => {
  try {
    return await mongoose.createConnection(process.env.DB_COMMENT_URI);
  } catch (error) {
    console.error('Error connecting to Comment DB:', error.message);
    process.exit(1);
  }
};

const connectVideoDB = async () => {
  try {
    return await mongoose.createConnection(process.env.DB_VIDEO_URI);
  } catch (error) {
    console.error('Error connecting to Video DB:', error.message);
    process.exit(1);
  }
};

const connectUserDB = async () => {
  try {
    return await mongoose.createConnection(process.env.DB_USER_URI);
  } catch (error) {
    console.error('Error connecting to User DB:', error.message);
    process.exit(1);
  }
};

const connectAdmin = async () => {
  try {
    await mongoose.connect(process.env.DB_ADMIN_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed', error);
    process.exit(1);
  }
};

module.exports = { connectCommentDB, connectVideoDB, connectUserDB, connectAdmin };
