import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TimeLine from "../components/TimeLine";
import { IoArrowBackSharp } from "react-icons/io5";

const Level1 = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const res = await axios.get(
          "http://localhost:9000/api/jung/v1/products/getallseries",
          { withCredentials: true }
        );

        if (!res) throw new Error("Error in fetching series!!");
        console.log(res.data.data);
        setSeries(res.data.data.sort());
      } catch (error) {
        console.log(error);
      }
    };

    fetchSeries();
  }, []);

  const handleOption = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <div className="bg-slate-800 min-h-screen p-2 flex flex-col items-center justify-start">
      <Link to='/' className="text-white absolute start-4 top-5">
        <IoArrowBackSharp size={35} />
      </Link>
      <div className="flex w-[60vw] justify-center items-center p-5">
        <TimeLine title={"Select Series"} isLast={true} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center text-white text-2xl font-bold">
        {series?.map((item, index) => {
          return (
            <Link
              to={`/select/${item}`}
              className="bg-slate-900 p-3 m-2 w-full text-center"
              key={index}
            >
              <div onClick={handleOption}>{item}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Level1;
