import React from 'react'
import avtar from "../assets/avtar.avif"

const Footer = () => {
  return (
    <div className='flex flex-col gap-12 md:flex-row justify-between'>
      <ul className='flex gap-6 text-gray-400'>
        <li>
          <a href='#'>Facebook</a>
        </li>
        <li>
          <a href='#'>Instagram</a>
        </li>
        <li>
          <a href='#'>Twitter</a>
        </li>
      </ul>

      <div className='flex  gap-2'>
        <img src={avtar} alt="avtar"  className='h-12 '/>
        <div >
          <p className='font-thin'>Have any Questions?</p>
          <a href="#" classname="font-medium">Talk to a specialist</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
