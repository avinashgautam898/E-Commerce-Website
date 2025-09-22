import React from 'react'
import { useState } from 'react'
export default function Filter() {
  const [data,setData]=useState('12')
  const [name,setName]=useState('Name')
  return (
    <div className='h-15 w-230 border-2 border-[#F1F3F4] flex items-center gap-15  item-center rounded-sm bg-[#F6F7F8] '>
      <span className='text-sm text-[#22262A] pl-4 '>13 Items</span>
      <div className='flex items-center border-2 border-[#F1F3F4] gap-8'>
        <span className='text-sm text-[#22262A] pl-2'>Sort By </span>
        <div className='border border-[#F1F3F4] flex gap-8 pt-1 relative text-left z-5'>
          <span className='text-sm text-[#22262A] pl-1 pb-1'>{name}</span>
          <select className='text-sm text-[#22262A] cursor-pointer outline-none focus:border-1 border-sky-300 ' onChange={(e)=>{setName(e.target.value)}}>
            <option value="" className='disabled hidden'></option>
            <option value="Name">Name</option>
            <option value="Price">Price</option>
            <option value="Brand">Brand</option>
          </select>
        </div>
        <div className='relative left-5 z-4 items-center border-2 border-[#F1F3F4] flex gap-8'>
          <span className='text-sm text-[#22262A]'>Show</span>
          <div className='flex gap-5 items-center '>
            <span className='text-sm text-[#22262A]'>{data}</span>
            <select className='text-sm text-[#22262A] focus:outline-none' onChange={(e)=>{setData(e.target.value)}}>
              <option value="" className='disabled hidden'></option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
        </div>
      </div>
      <div className='h-15 w-30 relative left-60 flex gap-3 cursor-pointer '>
        <div className='h-10 w-10 grid grid-flow-col grid-rows-3 pt-3.5 pl-3 relative left-3 top-1  '>
          <div className='h-1 w-1 bg-[#40BFFF]'></div>
          <div className='h-1 w-1  bg-[#40BFFF]'></div>
          <div className='h-1 w-1  bg-[#40BFFF]'></div>
          <div className='h-1 w-1  bg-[#40BFFF]'></div>
          <div className='h-1 w-1 bg-[#40BFFF]'></div>
          <div className='h-1 w-1  bg-[#40BFFF]'></div>
          <div className='h-1 w-1  bg-[#40BFFF]'></div>
          <div className='h-1 w-1  bg-[#40BFFF]'></div>
          <div className='h-1 w-1  bg-[#40BFFF]'></div>

        </div>
        <div className='h-10 w-10 grid grid-cols-1 pt-4 pl-4 cursor-pointer relative top-1'>
          <div className='h-0.5 w-5 bg-[#C1C8CE] '></div>
          <div className='h-0.5 w-5 bg-[#C1C8CE]'></div>
          <div className='h-0.5 w-5 bg-[#C1C8CE]'></div>
        </div>
      </div>
    </div>
  )
}
