const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { homepage, uploadImage } = require("./handlers/uploadHandler");
const { upload } = require("./middleware/uploadMiddleware");

mongoose
  .connect("mongodb://127.0.0.1:27017/uploads", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const app = express();
    app.use(bodyParser.urlencoded({ extended: true }));
    app.set("view engine", "ejs");

    app.get("/", homepage);
    app.post("/uploads", upload.single("images"), uploadImage);

    const port = 3000;
    app.listen(port, () => {
      console.log(`database connected... server is litening on ${port}`);
    });
  })
  .catch((error) => console.log(error));
