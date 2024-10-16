import { Router } from "express";
import { uploadImage } from "../middlewares/upload.middlewares.js";

const productsRouter = Router();

//POST /products (create a new product)
productsRouter.post("/", uploadImage("avatar"), (req, res) => {
  console.log(req.body);
  res.status(201).json({
    msg: "product created",
  });
});

export { productsRouter };
