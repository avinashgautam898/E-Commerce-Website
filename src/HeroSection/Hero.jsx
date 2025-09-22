import React from 'react'
import Filter from './Filter'
export default function Hero() {
  return (
   <div className='flex flex-col gap-6'>
     <div className='h-75 w-230  bg-[#40BFFF] flex justify-around rounded-sm'>
                <div className='h-30 w-80 relative top-30'>
                    <div className='flex flex-col'>
                        <span className='font-poppins text-[#FFFFFF] text-2xl leading[100] '>Adidas Men Running Sneakers</span><br />
                        <span className='text-sm font-poppins text-[#FFFFFF] relative bottom-8'>Performance and design.Taken right to the edge</span>
                        <span className='text-sm text-[#FFFFFF] font-poppins'>Shop now</span>
                        <div className='h-0.5 w-10 bg-white'></div>
                    </div> 
                </div>
                <div className='pt-30 '>
                    <img src="/AdShoes.png" alt="" className='h-40 w-90 rotate-5' />
               </div>
      </div>
     <Filter/>
   </div>
  )
}
