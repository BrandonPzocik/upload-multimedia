import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import path from "node:path";
import { productsRouter } from "./routes/products.routes.js";

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.static(path.join(path.resolve(), "src", "uploads")));

//routes
app.use("/products", productsRouter);

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
