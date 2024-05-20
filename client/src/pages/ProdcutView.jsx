import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { MdEdit } from "react-icons/md";

const ProdcutView = () => {
  const { _id, series, category, color } = useParams();
  // console.log(_id);

  const [product, setProdcut] = useState({});
  const [quantity, setQuantity]= useState(0)

const updateProductQuantity= async()=>{
  try {
    const response= await axios.post("http://localhost:9000/api/jung/v1/products/updateproductquantity",{quantity:qty, product_id:_id},{withCredentials:true});

  if(!response) throw new Error("Can't update Quantity!!")

  console.log(response.data.data);

  alert("quantity updated!!");
  setQty(0)
  fetchProdcutData();
  } catch (error) {
    
  }
}

  // http://localhost:9000/api/jung/v1/products/getproductbyid/663dfadfb3162e8be41281d0a
  const fetchProdcutData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9000/api/jung/v1/products/getproductbyid/${_id}`
      );

      if (!response) throw new Error("Cat get the response...");
      console.log(response.data.data);
      setProdcut(response.data.data);
      setQuantity(Number(response.data.data.Quantity));
      setQty(Number(response.data.data.Quantity));
    } catch (error) {
      // console.log(error);
    }
  };
  useEffect(() => {
    fetchProdcutData();
  }, [_id]);

  function logger(stuff) {
    console.log(stuff);
  }

  const [qty, setQty] = useState(0);


  
  useEffect(()=>{
    
    if(qty===0 || qty === Number(product.Quantity)) return;

    let timmer= setTimeout(()=>{
      console.log("hiii")
      updateProductQuantity();
    },1000)

    return ()=> {clearTimeout(timmer)}
  },[qty])

  return (
    <div className="bg-[#F9FDFF] w-full h-screen flex items-center justify-center flex-col gap-5">
      <Link
        to={
          series && category && color
            ? `/select/${series}/${category}/${color}`
            : "/"
        }
        className="text-black absolute start-4 top-5"
      >
        <IoArrowBackSharp size={35} className="text-[#175CD3]" />
      </Link>
      <img
        src={product.Image}
        alt=""
        className="w-72 aspect-square rounded-xl shadow-xl"
      />

      <p className="text-4xl font-bold m-5">{product.Name}</p>

      <div className="flex w-96 gap-2 justify-between items-center text-black">
        <div className="flex justify-center text-xl font-semibold border-gray-500 rounded-lg w-80 gap-2 p-4 bg-[#d0e9ff] h-20">
          <p>Current Stock : </p>
          <p className="text-3xl">{product.Quantity}</p>
        </div>
        <button className="btn bg-[#2E90FB] text-xl h-20 w-20"><MdEdit size={30} className="text-white"/></button>
      </div>



      <div className="flex gap-5 h-20 w-96">
        <button
          className="border text-4xl w-20 h-20 bg-[#1470EF] rounded-md text-white font-bold"
          onClick={() => setQty(qty - 1)}
        >
          -
        </button>

        <input className="border-2 rounded-md h-20 text-3xl font-bold w-48 flex justify-center items-center bg-[#d0e9ff] text-center"
          value={qty}
        />
        <button
          className="border text-4xl w-20 h-20 bg-[#1470EF] rounded-md text-white font-bold"
          onClick={() => setQty(qty + 1)}
        >
          +
        </button>
      </div>

      <div className="p-5 w-96 bg-[#d0e9ff] rounded-lg text-black">

        <p className="font-semibold text-xl">Details</p>
        <p>Name : {product.Name}</p>
        <p>Category : {product.Category}</p>
        <p>Color : {product.Category ? product.Category : "Not Def"}</p>
      </div>
    </div>
  );
};

export default ProdcutView;
