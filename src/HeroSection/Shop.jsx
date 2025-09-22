import React from 'react'
import Rating from './Rating'
import NextPage from './NextPage'
import Footer from './Footer'
export default function Shop() {
    return (
        <div className='h-150 w-200 relative left-80 bottom-70 right-10  '>
            <div className='grid grid-flow-col grid-rows-2 p-19 gap-x-25 gap-y-15 relative bottom-13 right-19 rounded'>
               <div className='h-60 w-60  gap-4 bg-[url(/shoes1.png)] bg-cover '>
                    <div className='h-8 w-15 bg-[#FF4858]'>
                        <span className='text-[#FFFFFF] pl-3'>Hot</span>
                    </div>
                     <div className='bg-white h-23 w-70 relative top-55 '>
                            <span className='font-poppins font-semibold text-[#223263] pl-7 pt-4 leading-0'>Nike Air Max 270 React</span>
                            <Rating value="4"/>
                            <div className='pt-2 flex gap-5'>
                                 <span className='font-poppins text-[#40BFFF] pl-7'>$2543</span>
                                  <span className='text-sm line-through text-[#9098B1] pt-1'>$534</span>
                                  <span className='text-[#FB7181] tracking-[0.5px]'>24% Off</span>
                            </div>
                        </div>
                </div>
               <div className='h-80 w-60  gap-4 bg-[url(/shoes-2.png)] bg-cover '>
                    <div className='h-8 w-15 bg-[#FF4858] '>
                        <span className='text-[#FFFFFF] pl-3'>Hot</span>
                    </div>
                     <div className='bg-white h-23 w-70 relative top-55 '>
                            <span className='font-poppins font-semibold text-[#223263] pl-7 pt-4 leading-0'>Nike Air Max 270 React</span>
                            <Rating value="4"/>
                            <div className='pt-2 flex gap-5'>
                                 <span className='font-poppins text-[#40BFFF] pl-7'>$2543</span>
                                  <span className='text-sm line-through text-[#9098B1] pt-1'>$534</span>
                                  <span className='text-[#FB7181] tracking-[0.5px]'>24% Off</span>
                            </div>
                        </div>
                </div>
                <div className='h-60 w-60  gap-4 bg-[url(/bag.png)] bg-cover bg-bottom-left'>
                    <div className='h-8 w-15 bg-[#FF4858]'>
                        <span className='text-[#FFFFFF] pl-3'>Hot</span>
                    </div>
                     <div className='bg-white h-23 w-70 relative top-55 '>
                            <span className='font-poppins font-semibold text-[#223263] pl-7 pt-4 leading-0'>Nike Air Max 270 React</span>
                            <Rating value="4"/>
                            <div className='pt-2 flex gap-5'>
                                 <span className='font-poppins text-[#40BFFF] pl-7'>$2543</span>
                                  <span className='text-sm line-through text-[#9098B1] pt-1'>$534</span>
                                  <span className='text-[#FB7181] tracking-[0.5px]'>24% Off</span>
                            </div>
                        </div>
                </div>
               <div className='h-60 w-60  gap-4 bg-[url(/shoes-3.png)] bg-cover'>
                    <div className='h-8 w-15 bg-[#FF4858] bg-cover'>
                        <span className='text-[#FFFFFF] pl-3'>Hot</span>
                    </div>
                     <div className='bg-white h-23 w-70 relative top-55 '>
                            <span className='font-poppins font-semibold text-[#223263] pl-7 pt-4 leading-0'>Nike Air Max 270 React</span>
                            <Rating value="4"/>
                            <div className='pt-2 flex gap-5'>
                                 <span className='font-poppins text-[#40BFFF] pl-7'>$2543</span>
                                  <span className='text-sm line-through text-[#9098B1] pt-1'>$534</span>
                                  <span className='text-[#FB7181] tracking-[0.5px]'>24% Off</span>
                            </div>
                        </div>
                </div>
                <div className='h-60 w-60  gap-4 bg-[url(/bag-1.png)] bg-cover bg-bottom-right'>
                    <div className='h-8 w-15 bg-[#FF4858]'>
                        <span className='text-[#FFFFFF] pl-3'>Hot</span>
                    </div>
                     <div className='bg-white h-23 w-70 relative top-55 '>
                            <span className='font-poppins font-semibold text-[#223263] pl-7 pt-4 leading-0'>Nike Air Max 270 React</span>
                            <Rating value="4"/>
                            <div className='pt-2 flex gap-5'>
                                 <span className='font-poppins text-[#40BFFF] pl-7'>$2543</span>
                                  <span className='text-sm line-through text-[#9098B1] pt-1'>$534</span>
                                  <span className='text-[#FB7181] tracking-[0.5px]'>24% Off</span>
                            </div>
                        </div>
                </div>
                <div className='h-60 w-60 bg-[url(/shoes-4.png)] bg-cover'>
                    <div className='h-8 w-15 bg-[#FF4858]'>
                        <span className='text-[#FFFFFF] pl-3'>Hot</span>
                    </div>
                     <div className='bg-white h-23 w-70 relative top-55 '>
                            <span className='font-poppins font-semibold text-[#223263] pl-7 pt-4 leading-0'>Nike Air Max 270 React</span>
                            <Rating value="4"/>
                            <div className='pt-2 flex gap-5'>
                                 <span className='font-poppins text-[#40BFFF] pl-7'>$2543</span>
                                  <span className='text-sm line-through text-[#9098B1] pt-1'>$534</span>
                                  <span className='text-[#FB7181] tracking-[0.5px]'>24% Off</span>
                            </div>
                        </div>
                </div>
            </div>
            <NextPage/>
            <Footer/>
        </div>
    )
}
