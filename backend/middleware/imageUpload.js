const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const uploadSingleFile = multer({
  storage: storage,
}).single("image");

const uploadMultipleFile = multer({
  storage: storage,
}).array("image");

module.exports = { uploadMultipleFile, uploadSingleFile };
