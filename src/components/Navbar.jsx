import React from 'react';

import { NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';

function Navbar({isLogedIn, setIsLogedIn}) {
  

  
  return (
    <div className='flex justify-around items-center py-3 bg-[#F0F8FF] font-sans '>
        
        <div >
            <ul className='flex gap-8 text-black'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </ul>
        </div>
        <div className='flex gap-8 text-white'>
          {!isLogedIn&&<NavLink to="/logIn"><button className='bg-slate-800 p-2 rounded-md border border-blue-200'>Log In</button></NavLink>}
          {!isLogedIn&&<NavLink to="/signUp"><button className='bg-slate-800 p-2 rounded-md border border-blue-200'>Sign Up</button></NavLink>}
          {isLogedIn&&<NavLink to="/login" ><button onClick={()=>{
            setIsLogedIn(false)
            toast.success("Loged Out SuccessFully")
            }} className='bg-slate-800 p-2 rounded-md border border-blue-200'>Log Out</button></NavLink>}
          {isLogedIn&&<NavLink to="/dashboard"><button className='bg-slate-800 p-2 rounded-md border border-blue-200'>Dashboard</button></NavLink>}
        </div>
    </div>
  )
}

export default Navbar