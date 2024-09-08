module.exports.getComments = async (req, res, CommentModel) => {
  try {
    const comments = await CommentModel.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};