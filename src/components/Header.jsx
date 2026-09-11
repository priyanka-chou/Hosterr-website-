import React from 'react'
import { GiCargoShip } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";


const Header = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex items-center justify-center gap-2'>
        <GiCargoShip />
        <h5 className='font-bold'>Hosterr</h5>
        <button className='bg-linear-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-2xl'>Hoster is hiring</button>
      </div>

   
    <ul className='hidden lg:flex justify-between items-center text-gray-400 gap-6'>
      <li>
         <a href="#">Plans</a>
      </li>
      <li>
         <a href="#">Find Domain</a>
      </li>
      <li>
         <a href="#">Why Hoster</a>
      </li>
    </ul>

    <div className='hidden ld:flex justify-center items-center gap-6'>
      <a href="#" className='text-gray-400'>Sign In </a>
      <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600  text-white'>Join Waitlist</button>
    </div>

      
      <div className='lg:hidden'>
        <IoMenu />
      </div>
    </div>
  )
}

export default Header
