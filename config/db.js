const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectCommentDB = async () => {
  try {
    return await mongoose.createConnection(process.env.DB_COMMENT_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error('Error connecting to Comment DB:', error.message);
    process.exit(1);
  }
};

const connectVideoDB = async () => {
  try {
    return await mongoose.createConnection(process.env.DB_VIDEO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error('Error connecting to Video DB:', error.message);
    process.exit(1);
  }
};

const connectUserDB = async () => {
  try {
    return await mongoose.createConnection(process.env.DB_USER_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error('Error connecting to User DB:', error.message);
    process.exit(1);
  }
};

module.exports = { connectCommentDB, connectVideoDB, connectUserDB };
