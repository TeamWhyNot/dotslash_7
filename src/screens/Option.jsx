import React from 'react'
import NavbarLogOut from '../components/NavbarLogOut'
import kickstart from '../assets/Business startup.png'
import myShop from '../assets/myShop.svg'
import advice from '../assets/Advice.svg'
import anal from '../assets/analytics.svg'

const Option = () => {
  return (
    <div className='desk desktop h-[100vh]'>
        <NavbarLogOut/>
        <div className="grid h-[87%] grid-cols-2  justify-center items-center">
            <div className='flex justify-end' ><img src={kickstart} alt="" /></div>
            <div className="flex ">
                <div className=" grid grid-cols-2 gap-x-9">
                    <button><img src={myShop} alt="" /></button>
                    <button><img src={advice} alt="" /></button>
                    <div className='options flex justify-center'><button><img src={anal} alt="" /></button></div>
                </div>
                
            </div>
            </div>    
    </div>
  )
}

export default Option