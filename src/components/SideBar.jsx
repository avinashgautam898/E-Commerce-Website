import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../HeroSection/Hero';
function SideBar() {
    return (
        <div className=' relative top-5 ml-8 py-3 rounded-sm  flex gap-10'>
            <div className='h-125 w-70 md:75  bg-gray-50 flex flex-col gap-4'>
                <span className='font-poppins font-semibold text-[#22262A] relative top-2 left-4.5'>Hot Deals</span>
                <Link className='flex flex-row gap-43 pl-5 pt-9 hover:text-blue-500 ' to="/nike">
                    <span>Nike</span>
                    <span>2</span>
                </Link>
                <Link className='flex flex-row gap-37 pl-5 pt-6 hover:text-blue-500' to="/airmax">
                    <span>Airmax</span>
                    <span>48</span>
                </Link>
                <Link className='flex flex-row gap-41 pl-5 pt-6 hover:text-blue-500'>
                    <span>Nike</span>
                    <span>14</span>
                </Link>
                <Link className='flex flex-row gap-37 pl-5 pt-6 hover:text-blue-500'>
                    <span>Adidas</span>
                    <span>15</span>
                </Link>
                <Link className='flex flex-row gap-41 pl-5 pt-6 hover:text-blue-500'>
                    <span>Vans</span>
                    <span>23</span>
                </Link>
                <Link className='flex flex-row gap-38 pl-5 pt-6 hover:text-blue-500'>
                    <span>All-Star</span>
                    <span>1</span>
                </Link>
                <Link className='flex flex-row gap-37 pl-5 pt-6 hover:text-blue-500'>
                    <span>Adidas</span>
                    <span>95</span>
                </Link>
            </div>
            <Hero/>
        </div>
    )
}

export default SideBar

