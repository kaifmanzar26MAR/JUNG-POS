import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const classification = [
  "KNX",
  "INSERT",
  "LS",
  "A/AC/AF/A5",
  "CD",
  "ES",
  "ME",
  "AL",
  "MISC",
];

const Level2 = () => {
  const { sereis } = useParams();
  console.log(sereis);

  const [categories, setCategories]=useState([])

  const handleOption = (e) => {
    console.log(e.target.innerText);
  };

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const res = await axios.post(
          "http://localhost:9000/api/jung/v1/products/getallcategories",{series:sereis},
          { withCredentials: true }
        );

        if (!res) throw new Error("Error in fetching Categories!!");
        console.log(res.data.data);
        setCategories(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSeries();
  }, [sereis]);
  return (
    <div className="bg-slate-800 min-h-screen p-2 flex items-center justify-center">
      
        <div className="flex flex-col items-center justify-center text-white text-2xl font-bold">
          {categories.map((item, index) => {
            return (<Link to={`/level1/${sereis}/level2/${item}/level3`}>
              <div
                key={index}
                className="bg-slate-900 p-3 m-2 w-full text-center"
                onClick={handleOption}
              >
                {item}
              </div></Link>
            );
          })}
        </div>
      
    </div>
  );
};

export default Level2;
