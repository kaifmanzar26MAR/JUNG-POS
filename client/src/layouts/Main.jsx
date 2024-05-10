import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx'
import SearchBar from '../components/SearchBar.jsx';

const Main = () => {
  return (
      <div>
    {/* <Navbar /> */}
    <SearchBar/>
      <div className='bg-[#f0f2f5] flex'>
       {/* <div className='h-screen py-3 sticky left-0 top-0 '> <Sidebar /></div> */}
        <div className='p-5 flex flex-1'><Outlet /></div>
      </div>
    </div>
    
  )
}

export default Main
