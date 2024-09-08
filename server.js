const express = require('express');
const cors = require('cors'); // Import cors package
const { connectCommentDB, connectVideoDB, connectUserDB } = require('./config/db');
const commentModel = require('./models/commentModels');
const videoModel = require('./models/videoModels');
const userModel = require('./models/userModels');

const app = express();

(async () => {
  const commentDB = await connectCommentDB();
  const videoDB = await connectVideoDB();
  const userDB = await connectUserDB();

  const Comment = commentModel(commentDB);
  const Video = videoModel(videoDB);
  const User = userModel(userDB);

  const commentRoutes = require('./routes/commentRoutes')(Comment);
  const videoRoutes = require('./routes/videoRoutes')(Video);
  const userRoutes = require('./routes/userRoutes')(User);

  app.use(cors()); // Enable CORS for all routes
  app.use(express.json());

  app.use('/api/comment', commentRoutes);
  app.use('/api/video', videoRoutes);
  app.use('/api/user', userRoutes);

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})();
