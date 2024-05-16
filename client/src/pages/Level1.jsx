import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TimeLine from "../components/TimeLine";

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
        setSeries(res.data.data);
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
      <div className="flex w-[60vw] justify-center items-center">
        <TimeLine title={"Select Series"} isLast={true} />
      </div>

      <div className="flex flex-col items-center justify-center text-white text-2xl font-bold">
        {series?.map((item, index) => {
          return (
            <Link
              to={`/select/${item}`}
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

export default Level1;
