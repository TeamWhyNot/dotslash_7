import React from 'react'
import contact from '../assets/mobile/contact.svg'
import Header from '../components/Header'
import { NewButton } from '../components/NewButton'
import Navbar from '../components/Navbar'
import NavbarMo from '../components/NavbarMo'
const ContactPage = () => {
  return (
    <div className='mob h-100vh'>
        <Header/>
        <NavbarMo/>
        <div className="flex fadeSide justify-center items-center">
        <div className="flex flex-col items-center gap-4 h-[35rem] rounded-2xl w-[90%] m-auto pb-4 bg-lOrange">
            <h1 className="  mt-4 font-bold text-3xl text-center">Contact Us!</h1>
         <img src={contact} alt="" />   
            <div className="flex flex-col gap-3">
                <div className="title w-full "><h1>Drop your mail and message here..</h1></div>
                <input  className=" rounded-lg h-10 p-[2%] border-2 border-darkOrange"type="text"
                placeholder='Email address'
                />
                <input  className=" rounded-lg h-10 p-[2%] border-2 border-darkOrange"type="text"
                placeholder='Message '/>
            </div>
            <NewButton className='h-12 w-24'>Submit</NewButton>
         

        </div>
        </div>
    </div>
  )
}

export default ContactPage