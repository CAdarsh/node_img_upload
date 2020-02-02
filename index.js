var cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "cloud_name",
  api_key: "api_key",
  api_secret: "api_key"
});



cloudinary.uploader.upload("A17I7278.jpg", function(error, result) {
  console.log(result, error);
});