import React, { useEffect, useRef } from "react";
import logo from "../assets/logoLight.png";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import authContext from "../context/authContext";

const Landing = () => {
  const countElementsRef = useRef([]);

  useEffect(() => {
    const countUpObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const count = parseInt(target.getAttribute("data-count"), 10);
          let currentCount = 0;

          const increment = getCountIncrement(count);
          const duration = 2000;
          const delay = 100;
          let startTime;

          setTimeout(() => {
            startTime = performance.now();
          }, delay);

          const countUpInterval = setInterval(() => {
            const elapsedTime = performance.now() - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const incrementCount =
              Math.floor(progress * (count / increment)) * increment;

            target.textContent = incrementCount + "+";

            if (incrementCount >= count) {
              target.textContent = count + "+";
              clearInterval(countUpInterval);
              if (observer && target instanceof Element) {
                observer.unobserve(target);
              }
            }
          }, 10);

          if (observer && target instanceof Element) {
            observer.unobserve(target);
          }
        }
      });
    });

    countElementsRef.current.forEach((element) => {
      countUpObserver.observe(element);
    });

    return () => {
      countElementsRef.current.forEach((element) => {
        if (countUpObserver && element instanceof Element) {
          countUpObserver.unobserve(element);
        }
      });
    };
  }, []);

  function getCountIncrement(count) {
    if (count === 7900) {
      return 100;
    } else if (count === 50000) {
      return 1000;
    } else if (count === 1000) {
      return 10;
    } else {
      return 1;
    }
  }

  return (
    <div>
      <div className="mob flex flex-col justify-center items-center  h-[100vh]">
        <div className="flex flex-col mt-[50%] gap-6">
          <img src={logo} alt="" />
          <h1 className="text-center font-bold text-4xl text-dorange ">
            ShopRush
          </h1>
        </div>
        <div className=" h-[20rem] w-full flex flex-col items-center justify-center gap-6 ">
          <Link to="/category" className="w-[80%]">
            <Button className="h-14 mt-[20%] w-full">Let's get started</Button>
          </Link>
          <div className="flex gap-2">
            <p>I already have an account</p>
            <Link to="/login">
              <Button className=" rounded-[100%] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
                    fill="#FF9800"
                  />
                  <path
                    d="M16.6715 9.29492L15.4918 10.4987L19.2475 14.146H8.08887V15.8312H19.2475L15.4918 19.4785L16.6715 20.6822L22.5457 14.9886L16.6715 9.29492Z"
                    fill="white"
                  />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="desk">
        <div className="fade deskLanding h-[100vh] bg-no-repeat bg-cover">
          <Navbar />
          <div className=" flex flex-col  gap-8 w-[55%] ml-[10%] mt-[5%]  ">
            <h1 className=" text-[3rem] font-bold">Thrive Locally Now.</h1>
            <div className=" flex flex-col">
              <p className=" text-[2rem] font-semibold text-[#0000008a]">
                Local treasures await,
              </p>
              <p className=" text-[2rem] font-semibold text-[#0000008a]">
                {" "}
                Shop smart, collect easy, embrace community vitality.
              </p>
            </div>
            <Link to="/signup">
              <Button className=" join bg-transparent  w-[11rem]  h-11">
                Join Now
              </Button>
            </Link>
            <div className=" h-48 flex items-end ">
              <div className="grid grid-cols-3 grid-rows-2 gap-x-8 gap-y-2 w-[100%]">
                <div
                  className="flex  items-center  text-4xl text-darkOrange font-semibold border-r-2 border-solid border-black"
                  ref={(el) => countElementsRef.current.push(el)}
                  data-count="7900+"
                >
                  0+
                </div>
                <div
                  className="count flex  items-center  text-4xl text-darkOrange font-semibold border-r-2 border-solid border-black"
                  ref={(el) => countElementsRef.current.push(el)}
                  data-count="50000+"
                >
                  0+
                </div>
                <div
                  className="count flex  items-center text-4xl text-darkOrange font-semibold  "
                  ref={(el) => countElementsRef.current.push(el)}
                  data-count="1000+"
                >
                  0+
                </div>
                <div className="flex  items-center  font-[400] text-[2rem] ">
                  Downloads
                </div>
                <div className="flex  items-center  font-[400] text-[2rem] ">
                  Transactions
                </div>
                <div className="flex  items-center  font-[400] text-[2rem] ">
                  Shopkeepers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
