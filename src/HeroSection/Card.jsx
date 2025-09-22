import React from 'react'
import { FaCcVisa,FaCcMastercard,FaCcPaypal } from 'react-icons/fa'
function Card() {
  return (
    <div className='h-20 w-290  outline-none focus:ring-2 focus:border-[#BCDDFE] relative left-25 top-10.5'>
     <div className='h-0.5 w-290 bg-[#F6F7F8] relative top-1'></div>
     <div className='relative top-8 h-10 w-100'>
             <span className='text-md text-[#C1C8CE]'>© 2018 Ecommerce theme by www.bisenbaev.com</span>
        </div>
        <div className='h-10 w-80  relative left-240 cursor-pointer'>
            <div className='h-10 w-15 bg-no-repeat bg-center bg-contain  bg-[url(/western-union.png)] rounded-md relative bottom-4 left-4'></div>
            <div className='flex gap-1 relative bottom-15 left-12'>
                 <FaCcMastercard className='h-5 w-15 relative left-10 top-3 text-[#494CA3]'/>
                  <FaCcVisa className='h-5 w-15 relative left-10 top-3 text-[#494CA3]'/>
                  <FaCcPaypal  className='h-5 w-15 relative left-10 top-3  text-[#3284AE]'/>
            </div>
        </div>
    </div>
  )
}

export default Card
