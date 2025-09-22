import React from 'react'
import { useState } from 'react'
import Shop from '../HeroSection/Shop'
export default function PriceCaed() {
  const [range,setRange]=useState('$13.99-25.99')
  return (
    <div className='relative top-13 left-7.5'>
        <div className="h-45 w-70  bg-gray-50 pt-6.5 rounded-sm">
      <span className='font-poppins font-medium  text-[#22262A]  pl-3'>PRICES</span>
      <div className='flex gap-12 pl-4 pt-5'>
        <span>Ranger:</span>
        <span>{range}</span>
      </div>
      <div className='relative top-5 left-4 '>
        <input type="range" className='w-55' value={range} onChange={(e)=>{setRange(e.target.value)}} />
      </div>
      <div>
          <Shop/>
      </div>
     </div>
    </div>
    
  )
}
