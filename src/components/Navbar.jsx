import React from 'react'
import { Link } from 'react-router-dom';
import SideBar from './SideBar';
import "../App.css";
import PriceCaed from './PriceCaed';
import ColorPalate from './ColorPalate';
import Brand from './Brand';
import MoreButton from './MoreButton';


function Navbar() {
  return (
    <div className=' mt-3 w-auto flex flex-col'>
      <nav className='flex items-center pl-9'>
        <Link to="/" className='inline-flex items-center gap-1'>
          <img src="/Icon.png" alt="Logo" className="w-10 h-auto pt-1 object-contain items-center " />
          <span className='font-poppins font-bold leading-none pt-0.1 items-center'>E-Comm</span>
        </Link>
        <div className='h-[40px] w-auto relative top-3.5 left-50 flex  gap-15 font-poppins text-sm '>
          <Link to="/">
            <span className='hover:text-blue-500'>HOME</span>
          </Link>
          <Link to="/bag">
            <span className='hover:text-blue-500'>BAG</span>
          </Link>
          <Link to="/sneakers">
            <span className='hover:text-blue-500'>SNEAKERS</span>
          </Link>
          <Link to="/belt">
            <span className='hover:text-blue-500'>BELT</span>
          </Link>
          <Link to="/contact">
            <span className='hover:text-blue-500'>CONTACT</span>
          </Link>
          <div className='h-auto w-auto relative left-48 bottom-3 pl-15  ' >
            <Link to="/cart" className='flex text-md '>
              <img src="/Cart.png" alt="cart" className="w-[45px] h-[36px] pt-1 object-contain " />
              <span className='pt-3'>items</span>
              <span className='pt-3 pl-1'>$0.00</span>
            </Link>
          </div>
        </div>
      </nav>
      <SideBar />
      <PriceCaed/>
      <ColorPalate/>
      <Brand/>
      <MoreButton/>
    </div>
  )
}

export default Navbar
