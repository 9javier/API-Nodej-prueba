import express from "express";
import ProductsController from "../controllers/productsController";

const router = express.Router();
const productsController = new ProductsController();

router.post('/products', (req, res, next) => {
   return productsController.getProductBySku(req,res,next);
});



export default router;