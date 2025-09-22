import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook,FaTwitter } from 'react-icons/fa'
import Information from './Information'
import Card from './Card'
export default function Footer() {
  return (
    <div className='h-150 w-350 border-2 border-[#BCDDFE] bg-[#BCDDFE] relative right-88 bottom-7'>
       <div className='relative top-20 left-28'>
         <Link to="/" className='inline-flex gap-1'>
          <img src="/Icon.png" alt="Logo" className="w-10 h-auto pt-1 object-contain items-center " />
          <span className='text-md font-poppins font-bold leading-none pt-3.5 tracking-normal'>E-Comm</span>
          </Link>
       </div>
       <div className='h-10 w-80 relative top-20 left-10'>
            <span className='font-poppins text-sm text-[#22262A]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.
            </span>
          </div>
          <div className='relative h-10 w-40  left-160 top-3 flex flex-col gap-4'>
              <span className='text-md font-poppins font-medium relative right-4'>Follow Us</span>
              <div className='h-10 w-60 relative right-4'>
                    <span className='text-sm  text-[#22262A] leading-none '>Since the 1500s, when an unknown printer took a galley of type and scrambled.</span>
              </div>
              <div className='relative top-10 right-4.5'>
                <div className='flex gap-9 cursor-pointer '>
                       <FaFacebook className='text-[#385C8E]'/>
                    <FaTwitter className='text-[#03A9F4]'/>
                </div>
              </div>
          </div>
          <div className='relative left-250 h-30 w-50 '>
               <span className='text-md font-semibold pl-11 font-[#22262A] '>Contact Us</span>
               <div className='text-sm relative top-3 left-11 h-10 w-30'>
                      <span>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</span>
               </div>
          </div>
          <Information/>
          <Card/>
    </div>
  )
}
