(() => {
  // image.png
  var image_default = "data:image/png;base64,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";

  // image.jpg
  var image_default2 = "./image-UKQOKISI.jpg";

  // input_image.js
  var png_image = document.getElementById("image_png");
  png_image.src = image_default;
  var jpg_image = document.getElementById("image_jpg");
  jpg_image.src = image_default2;
})();