const express = require("express");
const multer = require("multer");
const cloudinary = require("../config/cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'ecommerce-images', // Cloudinary folder name
    allowed_formats: ['jpg', 'png'],
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single('product'), (req, res) => {
  res.json({
    success: 1,
    image_url: req.file.path, // Cloudinary image URL
    // image_url: `/images/${req.file.path}`
  });
});

module.exports = router;

































// const express = require("express");
// const multer = require("multer");
// const path = require("path");

// const router = express.Router();

// const storage = multer.diskStorage({
//   destination: './upload/images',
//   filename: (req, file, cb) => {
//     return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//   }
// });

// const upload = multer({ storage: storage });

// router.post("/", upload.single('product'), (req, res) => {
//   res.json({
//     success: 1,
//     image_url: `/images/${req.file.filename}`
//   });
// });

// module.exports = router;
