module.exports.getVideos = async (req, res, VideoModel) => {
  try {
    const videos = await VideoModel.find();
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};