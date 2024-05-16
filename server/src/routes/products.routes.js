import { Router } from "express";
import { addCDProduct, getAllCDProducts, getAllCategoriesOfASereis, getAllColors, getAllSeries, getProductById, getTheFinalProductList, searchProduct, updateNullCategoryToXYZ } from "../controllers/products.controller.js";

const router = Router();
router.route("/getcdproducts").get(getAllCDProducts);
router.route("/addcdproduct").post(addCDProduct);
router.route("/searchproducts").post(searchProduct);
router.route('/getproductbyid/:_id').get(getProductById);
router.route('/updatecat').get(updateNullCategoryToXYZ);



router.route('/getallseries').get(getAllSeries)
router.route('/getallcategories').post(getAllCategoriesOfASereis)
router.route('/getallcolors').post(getAllColors)
router.route('/getfinalproductlist').post(getTheFinalProductList);

export default router;
