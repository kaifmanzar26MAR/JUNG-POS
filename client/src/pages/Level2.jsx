import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TimeLine from "../components/TimeLine";
import { IoArrowBackSharp } from "react-icons/io5";

const Level2 = () => {
  const { sereis } = useParams();
  console.log(sereis);

  const [categories, setCategories] = useState([]);

  const handleOption = (e) => {
    console.log(e.target.innerText);
  };

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const res = await axios.post(
          "http://localhost:9000/api/jung/v1/products/getallcategories",
          { series: sereis },
          { withCredentials: true }
        );

        if (!res) throw new Error("Error in fetching Categories!!");
        console.log(res.data.data);
        setCategories(res.data.data.sort());
      } catch (error) {
        console.log(error);
      }
    };

    fetchSeries();
  }, [sereis]);

  return (
    <div className="bg-slate-800 min-h-screen p-2 flex flex-col items-center justify-start">
      <Link to="/select" className="text-white absolute start-4 top-5">
        <IoArrowBackSharp size={35} />
      </Link>
      <div className="flex w-[60vw] justify-center items-center p-5">
        <TimeLine title={sereis} isLast={false} />
        <TimeLine title={"Select Category"} isLast={true} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center text-white text-2xl font-bold">
        {categories.map((item, index) => {
          return (
            <Link
              to={`/select/${sereis}/${item}`}
              className="bg-slate-900 p-3 m-2 w-full text-center"
            >
              <div key={index} onClick={handleOption}>
                {item}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Level2;
