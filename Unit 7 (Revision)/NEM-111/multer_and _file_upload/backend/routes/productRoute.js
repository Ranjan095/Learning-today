/** @format */

let express = require("express");
const { ProModal } = require("../model/productModal");
const { upload } = require("../multer/avatar");

let productRoute = express.Router();

const cpUpload = upload.fields([{ name: "avatar", maxCount: 5 }, {}]);
//API for file upload
productRoute.post("/upload", upload.single("avatar"), async (req, res) => {
  try {
    console.log(req.file);
    res.send("product route for file Upload api");
  } catch (error) {
    console.log(error);
  }
});
// API rot find all product
productRoute.get("/", async (req, res) => {
  let { title, brand, category } = req.query;
  let queryObj = {};

  if (title) {
    queryObj.title = { $regex: title, $options: "i" };
  }
  if (brand) {
    queryObj.brand = { $regex: brand, $options: "i" };
  }
  if (category) {
    queryObj.category = { $regex: category, $options: "i" };
  }
  // console.log(queryObj);

  try {
    let product = await ProModal.find(queryObj);
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

// API for Serch by title/brand/category
productRoute.get("/:search", async (req, res) => {
  let { search } = req.params;

  try {
    let pro = await ProModal.find({
      $or: [
        { title: { $regex: search, $options: "i" } },
        { brand: { $regex: search, $options: "i" } },
        { category: { $regex: search, $options: "i" } },
      ],
    });
    res.status(200).send(pro);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = { productRoute };
