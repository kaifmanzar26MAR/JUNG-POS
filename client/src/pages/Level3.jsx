import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';


const classification = ['KNX', 'INSERT', 'LS', 'A/AC/AF/A5', 'CD', 'ES', 'ME', 'AL', 'MISC'];

const handleOption = (e) => {
  console.log(e.target.innerText)
}

const Level3 = () => {

  const {sereis, category} = useParams();
  console.log(sereis, category)
  const [color, setColor]=useState([])

  const handleOption = (e) => {
    console.log(e.target.innerText);
  };

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const res = await axios.post(
          "http://localhost:9000/api/jung/v1/products/getallcolors",{series:sereis,category},
          { withCredentials: true }
        );

        if (!res) throw new Error("Error in fetching Categories!!");
        console.log(res.data.data);
        setColor(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSeries();
  }, [sereis,category]);
  return (
    <div className='bg-slate-800 min-h-screen p-2 flex items-center justify-center'>
    

      <div className='flex flex-col items-center justify-center text-white text-2xl font-bold'>
        {color?.map((item, index) => {
          return (
            <Link to={`/select/${sereis}/${category}/${item}`} className='bg-slate-900 p-3 m-2 w-full text-center'><div key={index}  onClick={handleOption}>
              {item}
            </div></Link>
          ) 
        })}
      </div>
    
    </div>
  )
}

export default Level3;