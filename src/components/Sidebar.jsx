import React from 'react';
import shopLogo from '../assets/logoLight.png';
import dashboard from '../assets/home 2.svg';
import orders from '../assets/Order.svg';
import myShop from '../assets/Vector.svg';
import robo from '../assets/Robo Advisor.svg';
import { Link } from 'react-router-dom';
import { Button } from './Button';

const Sidebar = () => {
    const items = [
        { image: dashboard, imgclass: 'dash', alt: 'Dashboard', link: '/analytics' },
        { image: myShop, imgclass: 'my-shop', alt: 'My shop', link: '/myshop' },
        { image: orders, imgclass: 'order', alt: 'Orders', link: '/shopkeeperorderpage' },
        {image: robo, imgclass: 'robo', alt:'ChatBot', link: '/chatbot'}
        
    ];

    return (
        <div>
            <div className="desktop">
                <div className=' side h-[100vh] w-[20rem] flex  justify-center bg-white border-r-darkOrange '>
                    <div className="mainBar flex flex-col items-center h-[100vh] gap-[3rem] w-[15rem] bg-transparent">
                        <div className="logo mt-4 flex gap-2  items-center">
                            <div>
                                <img className='h-[50px] w-[50px]' src={shopLogo} alt="" srcSet="" />
                            </div>
                            <div className=' font-semibold text-2xl'>
                                ShopRush
                            </div>
                        </div>
                        <div className="items flex flex-col gap-11 ">
                            {items.map((item, index) => (
                                <Link key={index} to={item.link}>
                                    <div className="item flex gap-10">
                                        <div className={`${item.imgclass} flex `}>
                                            <img src={item.image} alt={item.alt} />
                                        </div>
                                        <div className=' text-lg font-normal'>{item.alt}</div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <Button className='h-[2.5rem] w-[6rem] '>Logout</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
