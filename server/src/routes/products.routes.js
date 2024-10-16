import { Router } from "express";
import { uploadImage } from "../middlewares/upload.middlewares.js";
import { createProductCrtl } from "../controllers/products.controllers.js";

const productsRouter = Router();

//POST /products (create a new product)
productsRouter.post("/", uploadImage("image"), createProductCrtl);

export { productsRouter };
