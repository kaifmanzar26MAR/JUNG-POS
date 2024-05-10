import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { CD } from "../models/cd.product.model.js";

const getAllCDProducts = asyncHandler(async (req, res) => {
  const cdProducts = await CD.find();
  if (!cdProducts) {
    throw new ApiError(
      500,
      "Something went wrong in fetching the cd Prodcuts!!"
    );
  }

  return res
    .status(200)
    .json(new ApiResponse(201, cdProducts, "Got All prudcuts!!"));
});

const addCDProduct = asyncHandler(async (req, res) => {
  const { Name, Category, Image, Quantity, AddedDate } = req.body;

  const Cdinstance = await CD.create({
    Name,
    Category,
    Image,
    Quantity,
    "Added Date": AddedDate,
  });

  if (!Cdinstance) {
    throw new ApiError(500, "Error in adding data!!");
  }

  return res
    .status(200)
    .json(new ApiResponse(201, Cdinstance, "added successfully!!"));
});

const searchProduct = asyncHandler(async (req, res) => {
  const { inputText } = req.body;
  // console.log(inputText, req.body);
  const allprodcuts= await CD.find();
  const products =  allprodcuts.filter((product) => {
    const productName = product?.Name?.toString().toLowerCase();
    const category = product?.Category?.toString().toLowerCase();
    const searchText = inputText?.toString().toLowerCase();
    return productName?.includes(searchText) || category?.includes(searchText);
  });

  if(!products){
    throw new ApiError(500, "no Prodcut found!!")
  }

  return res.status(200).json(new ApiResponse(201, products, "Found some products!!"))
});

export { getAllCDProducts, addCDProduct, searchProduct };
