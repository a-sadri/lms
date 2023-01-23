const multer = require("multer");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");

require("dotenv").config();

const bucket = "test";

const s3 = new AWS.S3({
  endpoint: process.env.S3_URL,
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  sslEnabled: false,
  s3ForcePathStyle: true,
});

const storage = multerS3({
  s3,
  bucket,
  contentType: multerS3.AUTO_CONTENT_TYPE,
  acl: "public-read",
  metadata: (req, file, cb) => {
    cb(null, { fieldName: file.fieldname });
  },
  key: (req, file, cb) => {
    cb(null, Date.now().toString());
  },
});

exports.bucket = bucket;
exports.s3 = s3;
exports.upload = multer({ storage });
