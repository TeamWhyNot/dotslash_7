import React from 'react'
import kurta from '../assets/mobile/kurtagirl.svg'
const GenCard = () => {
  return (
    <div>
        <div className="flex flex-col gap-1">
            <img height='174' width='155' className='border-2 border-gainsboro rounded-[10%]' src={kurta} alt="" />
            <div className='text-xl font-semibold '>Kurta Set</div>
            <div  className='text-xl font-semibold'>₹ 1000</div>
        </div>
    </div>
  )
}

export default GenCard