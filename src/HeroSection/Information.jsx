import React from 'react'
import { Link } from 'react-router-dom'
export default function Information() {
    return (
        <div className='h-50 w-320 relative top-14 left-10  '>
            <div className='flex gap-45 relative top-2'>
                <div className='flex flex-col h-40 w-50  gap-5 '>
                    <span className='font-poppins  text-[#22262A]'>Information</span>
                    <div className='h-15 w-32 flex flex-col gap-1'>
                     <Link to="/about" className='font-poppins text-sm text-[#262626]'>About Us</Link>
                     <Link to="/about" className='font-poppins text-sm text-[#262626]'>Information</Link>
                     <Link to="/about" className='font-poppins text-sm text-[#262626]'>Privacy Policy</Link>
                     <Link to="/about" className='font-poppins text-sm text-[#262626]'>Terms & Condition</Link>
                    </div>
                </div>
                <div className='flex flex-col h-40 w-50 gap-4'>
                    <span className='font-poppins text-[#22262A]'>Service</span>
                     <div className='h-15 w-32 flex flex-col gap-1'>
                     <Link to="/about" className='font-poppins text-sm text-[#262626]'>About Us</Link>
                     <Link to="/about" className='font-poppins text-sm text-[#262626]'>Information</Link>
                     <Link to="/about" className='font-poppins text-sm text-[#262626]'>Privacy Policy</Link>
                     <Link to="/about" className='font-poppins text-sm text-[#262626]'>Terms & Condition</Link>
                    </div>
                </div>
                <div className='flex flex-col h-40 w-50 gap-4'>
                    <span className='font-poppins  text-[#22262A]'>My Account</span>
                    <div className='h-15 w-32 flex flex-col gap-1'>
                     <Link to="/about" className='font-poppins text-sm text-[#262626]'>About Us</Link>
                     <Link to="/about" className='font-poppins text-sm text-[#262626]'>Information</Link>
                     <Link to="/about" className='font-poppins text-sm text-[#262626]'>Privacy Policy</Link>
                     <Link to="/about" className='font-poppins text-sm text-[#262626]'>Terms & Condition</Link>
                    </div>
                </div>
                <div className='flex flex-col h-40 w-50 gap-4'>
                    <span className='font-poppins  text-[#22262A]'>Our Offers</span>
                    <div className='h-15 w-32 flex flex-col gap-1'>
                     <Link to="/about" className='font-poppins text-sm text-[#262626]'>About Us</Link>
                     <Link to="/about" className='font-poppins text-sm text-[#262626]'>Information</Link>
                     <Link to="/about" className='font-poppins text-sm text-[#262626]'>Privacy Policy</Link>
                     <Link to="/about" className='font-poppins text-sm text-[#262626]'>Terms & Condition</Link>
                    </div>  
                </div>

            </div>
        </div>
    )
}
