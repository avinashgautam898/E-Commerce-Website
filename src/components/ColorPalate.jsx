import React from 'react'
function ColorPalate() {
  return (
    <div className='h-34 w-70 relative top-22 left-7.5 bg-gray-50 pt-6.5 rounded-sm'>
    <span className='font-poppins font-medium  text-[#22262A] pl-3'>COLOR</span>
    <div className='flex flex-row gap-5 pt-4 pl-4'>
        <div className='h-5 w-5 rounded-full border-1 bg-[#006CFF]'></div>
         <div className='h-5 w-5 rounded-full border-1 bg-[#FF00B4]'></div>
          <div className='h-5 w-5 rounded-full border-1 bg-[#FFF600]'></div>
           <div className='h-5 w-5 rounded-full border-1 bg-[#171717]'></div>
            <div className='h-5 w-5 rounded-full border-1 bg-[#FC3E39]'></div>
    </div>
    </div>
  )
}

export default ColorPalate
