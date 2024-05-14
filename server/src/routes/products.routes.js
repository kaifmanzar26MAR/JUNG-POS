import { Router } from "express";
import { addCDProduct, getAllCDProducts, getProductById, searchProduct } from "../controllers/cd.product.controller.js";

const router = Router();
router.route("/getcdproducts").get(getAllCDProducts);
router.route("/addcdproduct").post(addCDProduct);
router.route("/searchproducts").post(searchProduct);
router.route('/getproductbyid/:_id').get(getProductById);

export default router;
