import React from 'react'
import image from '../assets/girlphoto.png'
import { FcOk } from "react-icons/fc";

const Body = () => {
  return (
    <div className='space-y-4 lg:flex '>
      <div className="body flex justify-center items-center lg:flex-1 lg:order-2 lg:justify-end " >
        <img src={image} alt="girl" className='h-64 md:h-72 lg:h-100' />
      </div>

      <div className='lg:flex-1 lg:order-1'>
        <h1 className='text-4xl font-bold font-serif leading-tight'>Host your website in less than 5 minutes</h1>
        <p className='text-gray-400 my-3'>With Hoster, get yout wwebsite up and running in no lessthan 5 minutes with the most compitative pricing packages</p>
        <form action="" className='flex flex-col gap-2 md:flex-row'>
          <input type="email"  placeholder='Enter email address' className='rounded-md px-4 py-3  placeholder:text-gray-400 bg-white' />
          <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600  text-white'>Join Wishlist</button>
        </form>

        <div className='flex items-center'>
          <FcOk />
          <p className='text-gray-400'>No spam, ever  .Unsubscribe anytime </p>
        </div>

      </div>
    </div>
  )
}

export default Body
