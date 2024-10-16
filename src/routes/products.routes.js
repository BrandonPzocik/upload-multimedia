import { Router } from "express";

const productsRouter = Router();

//POST /products (create a new product)
productsRouter.post("/", (req, res) => {
  console.log(req.body);
  res.status(201).json({ message: "product created" });
});

export { productsRouter };
