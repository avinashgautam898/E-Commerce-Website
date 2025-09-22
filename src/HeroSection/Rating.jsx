import React from 'react'
import { FaStar } from 'react-icons/fa'
function Rating({value}) {
  return (
    <div className='flex gap-2 pl-15 pt-1'>
            {[...Array(5)].map((_,i)=>(
                <FaStar key={i} 
                className={i < value ? "text-yellow-400":"text-gray-300"}
                />
            ))}
    </div>
  )
}

export default Rating
