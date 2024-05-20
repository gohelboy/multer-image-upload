const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    image_path: {
      type: String,
    },
  },
  { timestamp: true }
);
const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
