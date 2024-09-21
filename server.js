const express = require('express');
const cors = require('cors'); 
const { connectCommentDB, connectVideoDB, connectUserDB, connectAdmin } = require('./config/db');
const commentModel = require('./models/commentModels');
const videoModel = require('./models/videoModels');
const userModel = require('./models/userModels');
const authModel = require('./models/authModels');

const app = express();

(async () => {
  // Database connections
  const commentDB = await connectCommentDB();
  const videoDB = await connectVideoDB();
  const userDB = await connectUserDB();
  const adminDB = await connectAdmin();

  // Models initialization
  const Comment = commentModel(commentDB);
  const Video = videoModel(videoDB);
  const User = userModel(userDB);
  const Admin = authModel(adminDB);

  // Route initializations
  const commentRoutes = require('./routes/commentRoutes')(Comment);
  const videoRoutes = require('./routes/videoRoutes')(Video);
  const userRoutes = require('./routes/userRoutes')(User);
  const authRoutes = require('./routes/authRoutes')(Admin);

  // Middleware
  app.use(cors()); // Allow all origins
  app.use(express.json()); // Parse JSON bodies

  // API routes
  app.use('/api/comment', commentRoutes);
  app.use('/api/video', videoRoutes);
  app.use('/api/user', userRoutes);
  app.use('/api/auth', authRoutes);

  // Start the server
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})();
