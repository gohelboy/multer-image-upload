const userModel = require("../models/userModel");

const upload = async (req, res) => {
  console.log(req.file.filename);
  const user = userModel({
    image_path: req.file.filename,
  });
  user.save();
  res.json({ path: user });
};

const getAllImages = async (req, res) => {
  const user = await userModel.find();
  console.log(user[0].image_path);
  res.json(user);
};

module.exports = { upload, getAllImages };
