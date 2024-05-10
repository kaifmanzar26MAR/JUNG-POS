import { Router } from "express";
import { addCDProduct, getAllCDProducts, searchProduct } from "../controllers/cd.product.controller.js";

const router = Router();
router.route("/getcdproducts").get(getAllCDProducts);
router.route("/addcdproduct").post(addCDProduct);
router.route("/searchproducts").post(searchProduct);

export default router;
