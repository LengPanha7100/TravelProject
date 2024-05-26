import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <>
       <div  className='flex gap-10 py-5 z-10 bottom-[520px] text-xl top-0 fixed'>
          <h1 className='relative left-20 text-2xl'>Travel</h1>
          <div className='flex gap-10 relative left-[290px]  text-red-600'>
            <Link to="/home">Home</Link>
            <Link to ="/review">Review</Link>
            <Link to="/about-us" >About Us</Link>
            <NavLink to="/contact-us">Contact Us</NavLink>
          </div>
          <div>
            <div className='left-[450px] relative bg-white w-32 h-12 pt-2 rounded-full text-center bottom-2'>Sign In</div>
          </div>
      </div>
    
    
    
    </>
  )
}
