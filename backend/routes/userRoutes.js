const express = require("express");
const router = express.Router();
const { uploadSingleFile } = require("../middleware/imageUpload");
const { upload, getAllImages } = require("../controller/imageUploadController");

router.post("/upload", uploadSingleFile, upload);

router.get("/getimages", getAllImages);

module.exports = router;
