import React from 'react'
import { Link } from 'react-router-dom';


const classification = ['KNX', 'INSERT', 'LS', 'A/AC/AF/A5', 'CD', 'ES', 'ME', 'AL', 'MISC'];

const handleOption = (e) => {
  console.log(e.target.innerText)
}

const Level4 = () => {
  return (
    <div className='bg-slate-800 min-h-screen p-2 flex items-center justify-center'>
    <Link to='/level1/level2/level3/level4/product'>

      <div className='flex flex-col items-center justify-center text-white text-2xl font-bold'>
        {classification.map((item, index) => {
          return (
            <div key={index} className='bg-slate-900 p-3 m-2 w-full text-center' onClick={handleOption}>
              {item}
            </div>
          ) 
        })}
      </div>
    </Link>
    </div>
  )
}

export default Level4;