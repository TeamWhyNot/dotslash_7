import React from 'react'
import NavbarMo from '../components/NavbarMo' 
import Header from '../components/Header'
import OrderCard from '../components/OrderCard'

const UserOrder = () => {
    return (
        <div className=''>
            <div>
                <NavbarMo />
            </div>
            <div className='  '>
                <div>
                    <Header />
                </div>
                <div className='p-4 h-[680px] overflow-y-auto  '>
                    <div className='  '>
                        <div>
                            <h1 className='text-[28px]'>Your Bag</h1>
                        </div>
                        <div className='mt-4 '>
                            <div>
                                <h1>On-Going Orders</h1>
                            </div>
                            <div className='mt-2'>
                                <OrderCard/>
                            </div>
                        </div>




                    </div>
                </div>

            </div>

        </div>
    )
}

export default UserOrder