import React from 'react'
import { Link } from 'react-router-dom'

function Brand() {
    return (
        <div className='h-55 w-70 relative top-30 left-7.5 bg-gray-50 pt-6.5 rounded-sm'>
            <span className='font-poppins font-medium  text-[#22262A] pl-4'>BRAND</span>
            <div className='flex flex-col gap-4 pt-3 pl-4'>
                <Link to="/nike" className='flex gap-45 hover:text-blue-500'>
                    <span>Nike</span>
                    <span>99</span>
                </Link>
                <Link to="/nike" className='flex gap-45 hover:text-blue-500'>
                    <span>Nike</span>
                    <span>99</span>
                </Link>
                <Link to="/adidas" className='flex gap-41 hover:text-blue-500'>
                    <span>Adidas</span>
                    <span>99</span>
                </Link>
                <Link to="/siemens" className='flex gap-38 hover:text-blue-500'>
                    <span>Siemens</span>
                    <span>99</span>
                </Link>

            </div>
        </div>
    )
}

export default Brand
