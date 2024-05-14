import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  const [text, setText]= useState('');
  const [style,setStyle]=useState('center')

  const [resustantData, setResustantData] = useState([]);
  const fetchProdcuts = async () => {
    try {
      console.log("fetching...");
      // const inputText=text;
      
      const response = await axios.post(
        "http://localhost:9000/api/jung/v1/products/searchproducts",
        { inputText:text },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response) {
        throw new Error("Error in fetching");
      }
      console.log(response);
      const resData = response?.data?.data;
      console.log(resData);
      setResustantData(resData)
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   if(text===''){
        
  //       return;
  //   }
   
  // }, [text]);
  useEffect(()=>{
    // console.log(text)

    if(text===''){
      setResustantData([]);
      console.log("null")
      setStyle('center')
      document.getElementById('input').style.width='200px'
      document.getElementById('cont').style.justifyContent="center"
      return;
    }else{
      console.log('value')
      setStyle('start')
      document.getElementById('input').style.width='80%'
      document.getElementById('cont').style.justifyContent="start"
    }

    let timmer = setTimeout(() => {
      console.log('fetchiin....')
      fetchProdcuts();
    }, 500);

    return () => {
      clearTimeout(timmer);
    };
  },[text])
  return (
    
    <div className={`h-screen bg-black w-full flex flex-col gap-10 items-center `} id='cont' onClick={()=>setText('')}>
    {/* <SearchBar/> */}
      {<input type="text" value={text} onChange={(e)=>setText(e.target.value)} className='transition-all duration-500 m-5 p-2' id='input' placeholder='search product'/> }
      {text!='' ? <div className="result   relative shadow-sm shadow-black w-[1100px]  rounded-lg overflow-y-auto overflow-x-hidden -top-14">
        {
            resustantData?.map((e)=>{
                return(
                  <Link to={`/product/${e._id}`}>
                    <div className="w-full bg-white rounded-sm flex justify-around items-center p-2 border-2 cursor-pointer hover:bg-slate-100">
                        <img src={e.Image} alt="img" className="w-12 h-12 object-cover"/>
                        <p className="font-semibold ">{e.Name}</p>
                        <p className="font-semibold ">{e.Category}</p>
                        <p className="font-semibold ">Color</p>
                        <p className="font-semibold ">{e.Quantity}</p>
                        <p className="font-semibold ">{e["Added Date"]}</p>
                    </div></Link>
                )
            })
        }
      </div> : ""}
      {
        text==='' ? "or" : ""
      }
      {
        text==='' ? <div className='btn w-40 btn-success'>Select Product</div> : ""
      }
    </div>
  )
}

export default Home
