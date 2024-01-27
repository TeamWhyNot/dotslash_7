import React from 'react'
import NavbarMo from '../components/NavbarMo'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import CardCategory from '../components/CardCategory'
import ShopCard from '../components/ShopCard'
import BagCard from '../components/BagCard'
const UserBags = () => {
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
                            <BagCard /> 
                            <BagCard /> 
                            <BagCard /> 
                            <BagCard /> 
                            <BagCard />   
                        </div>




                    </div>
                </div>

            </div>

        </div>
    )
}

export default UserBags