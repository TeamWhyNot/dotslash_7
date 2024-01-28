import React from "react";
import Navbar from "../components/Navbar";
import NavbarMo from "../components/NavbarMo";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CardCategory from "../components/CardCategory";
import ShopCard from "../components/ShopCard";
import women from "../assets/mobile/pic.svg"
import men from "../assets/mobile/mens2.svg"
import Acc from "../assets/mobile/acc.svg"
import makeup from "../assets/mobile/makeup.svg"
import kids from "../assets/mobile/kids2.svg"
import { Link } from "react-router-dom";
const UserHome = () => {
  return (
    <div className="">
      <div>
        <NavbarMo />
      </div>
      <div className="">
        <div>
          <Header />
        </div>
        <div className="p-4 ">
          <div>
            <div className="px-2.5 mb-2">
              <div >
                <h1>Namaste ,</h1>
              </div>
              <div>
                <h1 className="text-[28px]">Jiya Patil</h1>
              </div>
            </div>
            <div className="">
              <SearchBar />
            </div>
            <div className="">
              <div className="mt-2">
                <h1>Categories</h1>
              </div>

              <div className=" flex gap-6 overflow-x-auto items-center mt-2 scrollbar-mobile">
                <CardCategory pic={women} Name='Women' />
                <CardCategory pic={men} Name='Men' />
                <CardCategory pic={Acc} Name='Accessories' />
                <CardCategory pic={makeup} Name='Cosmetics' />
                <CardCategory pic={kids} Name='Kids' />
                
              </div>
            </div>
            <div className="mt-8">
              <div className="flex gap-2 items-center">
                <div>
                  <h1>Shops Near You</h1>
                </div>
                <div className="w-[60%]">
                  <div className=" justify-end flex w-[100%] ">
                    <h1>View all</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div className="grid grid-cols-2 gap-3 h-[21rem] overflow-y-auto">
                <Link to='/products' ><ShopCard/></Link>
                <Link to='/products' ><ShopCard/></Link>
                <Link to='/products' ><ShopCard/></Link>
                <Link to='/products' ><ShopCard/></Link>
                <Link to='/products' ><ShopCard/></Link>
                <Link to='/products' ><ShopCard/></Link>
                <Link to='/products' ><ShopCard/></Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
