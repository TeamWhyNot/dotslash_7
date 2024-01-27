import React from 'react'
import Shop from '../assets/mobile/Shop.svg'
import cart from "../assets/mobile/cart.svg"
import magic from "../assets/mobile/magic.svg"
import profile from "../assets/mobile/profile.svg"
import coupons from "../assets/mobile/Coupon.svg"


const NavbarMo = () => {
    return (
        <div className='  p-3 mobile_navbar rounded-tr-lg rounded-tl-lg gap-12 drop-shadow-2xl absolute bottom-0 w-[100%] flex items-center justify-center '>
            <div>
                <img src={Shop}></img>
            </div>
            <div>
                <img src={cart}></img>
            </div>
            <div>
                <img src={magic}></img>
            </div>
            <div>
                <img src={coupons}></img>
            </div>
            <div>
                <img src={profile}></img>
            </div>
        </div>
    )
}

export default NavbarMo