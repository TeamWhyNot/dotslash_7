import React from 'react'
import Navbar from '../components/Navbar'
import NavbarMo from '../components/NavbarMo'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import CardCategory from '../components/CardCategory'
import ShopCard from '../components/ShopCard'

const UserHome = () => {
    return (
        <div className=''>
            <div>
                <NavbarMo />
            </div>
            <div className=''>
                <div>
                    <Header />
                </div>
                <div className='p-4 '>
                    <div>
                        <div>
                            <h1>Namaste ,</h1>
                        </div>
                        <div>
                            <h1 className='text-[28px]'>Jiya Patil</h1>
                        </div>
                        <div className=''>
                            <SearchBar />
                        </div>
                        <div className=''>
                            <div>
                                <h1>Categories</h1>
                            </div>

                            <div className=' flex gap-6 overflow-x-auto items-center mt-2'>
                                <CardCategory />
                                <CardCategory />
                                <CardCategory />
                                <CardCategory />
                                <CardCategory />
                                <CardCategory />
                            </div>
                        </div>
                        <div className='mt-8'>
                            <div className='flex gap-2 items-center'>

                                <div>
                                    <h1>Shops Near You</h1>
                                </div>
                                <div className='w-[60%]'>
                                    <div className=' justify-end flex w-[100%] '>
                                        <h1>view all</h1>
                                    </div>
                                </div>

                            </div>


                        </div>
                        <div className='mt-8'>
                            <div className='flex gap-2 items-center justify-center'>

                                <div>
                                    <ShopCard/>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default UserHome