import React from 'react'

const TimeLine = ( {title, isLast}) => {
    console.log(title)
    
  return (
    
      <div style={{clipPath:"polygon(89% 0, 100% 54%, 90% 100%, 0% 100%, 10% 53%, 0% 0%)"}} className={`${isLast ? "bg-red-500" :"bg-blue-500"} h-10 w-60 flex items-center justify-center`}>
        {title}
      </div>
  )
}

export default TimeLine
