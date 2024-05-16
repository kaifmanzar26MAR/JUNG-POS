import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import TimeLine from '../components/TimeLine';


const classification = ['KNX', 'INSERT', 'LS', 'A/AC/AF/A5', 'CD', 'ES', 'ME', 'AL', 'MISC'];

const handleOption = (e) => {
  console.log(e.target.innerText)
}

const Level4 = () => {
  const {sereis, category,color} = useParams();
  console.log(sereis, category,color)
  const [products, setProducts]=useState([])

  const handleOption = (e) => {
    console.log(e.target.innerText);
  };

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const res = await axios.post(
          "http://localhost:9000/api/jung/v1/products/getfinalproductlist",{series:sereis,category,color},
          { withCredentials: true }
        );

        if (!res) throw new Error("Error in fetching Categories!!");
        console.log(res.data.data);
        setProducts(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSeries();
  }, [sereis,category,color]);
  return (
    <div className="bg-slate-800 min-h-screen p-2 flex flex-col items-center justify-start">
      <div className="flex w-[60vw] justify-center items-center">
        <TimeLine title={sereis} isLast={false} />
        <TimeLine title={category} isLast={false} />
        <TimeLine title={color} isLast={false} />
        <TimeLine title={"Select Prodcut"} isLast={true} />
      </div>
      <div className='flex flex-col items-center justify-center text-white text-2xl font-bold'>
        {products?.map((item, index) => {
          return (
            <Link to={`/select/${sereis}/${category}/${color}/${item._id}`} className='bg-slate-900 p-3 m-2 w-full text-center'><div key={index._id}  onClick={handleOption}>
              {item.Name}
            </div></Link>
          ) 
        })}
      </div>
    
    </div>
  )
}

export default Level4;