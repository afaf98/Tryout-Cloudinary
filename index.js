const cloudinary = require("cloudinary").v2;
const configCloudinary = require("./config");

configCloudinary();

cloudinary.uploader.upload("./tryOutUpload.png", function (error, result) {
  console.log(result, error);
});
