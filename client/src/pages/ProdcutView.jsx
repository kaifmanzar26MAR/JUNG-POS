import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";

const ProdcutView = () => {
  const { _id } = useParams();
  console.log(_id);

  const [product, setProdcut] = useState({});

  // http://localhost:9000/api/jung/v1/products/getproductbyid/663dfadfb3162e8be41281d0a
  const fetchProdcutData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9000/api/jung/v1/products/getproductbyid/${_id}`
      );

      if (!response) throw new Error("Cat get the response...");
      console.log(response.data.data);
      setProdcut(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProdcutData();
  }, [_id]);
  return (
    <div className="bg-slate-800 w-full h-screen flex items-center justify-center flex-col gap-5">
      <Link to="/select/LS/FRAME/red" className="text-white absolute start-4 top-5">
        <IoArrowBackSharp size={35} />
      </Link>
      <img
        src={product.Image}
        alt=""
        className="w-40 aspect-square border-2 border-gray-500  rounded-xl"
      />

      <div className="flex gap-2 justify-center items-center p-2 border-2 border-gray-500 rounded-lg text-white">
        <p>Current Stock :</p>
        <p>{product.Quantity}</p>
        <button className="btn btn-success">Edit</button>
      </div>

      <div className="p-5 border-2 border-green-300 rounded-lg w-80 text-white">
        <p>Name : {product.Name}</p>
        <p>Category : {product.Category}</p>
        <p>Color : {product.Category ? product.Category : "Not Def"}</p>
      </div>
    </div>
  );
};

export default ProdcutView;
