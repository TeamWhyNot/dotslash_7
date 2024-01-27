import React, { useEffect, useState } from "react";
import NavbarLogOut from "../components/NavbarLogOut";
import SquareCard from "../components/SquareCard";
import ChartCard from "../components/ChartCard";
import Card from "../components/Card";
import usericon from "../assets/usericon.svg";
import downarrow from "../assets/downarrow.svg";
import moneyicon from "../assets/moneyicon.svg";
import totalcustomericon from "../assets/totalcustomericon.svg";
import Coupon from "../components/Coupon";
import LineChartRevenue from "../components/LineChartJs";
import Sidebar from "../components/Sidebar";

const Analytics = () => {
  const chartDataByYear = {
    2022: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)),
    2023: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)),
    2024: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)),
  }; //total revenue

  const chartDataByYearPredicted = {
    2022: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)),
    2023: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)),
    2024: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)),
  };

  const chartData2 = [
    1000, 200, 30000, 4000, 4444, 2222, 6666, 8888, 100000, 6666, 44444, 66666,
  ]; //traffic sources

  // console.log(chartDataByYear[2022]);
  const [selectedYear, setSelectedYear] = useState("2022");
  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  useEffect(() => {
    setSelectedYear("2022");
  }, []); //initialize

  return (
    <div>
      <div className="desk deskLogin h-[100vh]">
        <NavbarLogOut />

        <div className="h-[80%] w-full flex justify-center items-center mt-14">
          <div className="h-full w-[100vw] px-10 flex">
            <div
              className=" border-r-2 border-black flex flex-wrap pt-16  px-6"
              style={{ flex: "70%" }}
            >
              <div className="h-[45%] w-full flex gap-x-6">
                <ChartCard className={"px-6"}>
                  <div className="h-[25%] w-full pt-4 font-inter text-sm font-semibold text-black flex items-center justify-between  ">
                    <p>TOTAL REVENUE</p>
                    <div className="flex items-center">
                      <p className="text-sm font-medium font-inter text-gray">
                        Filter by:
                      </p>
                      <select
                        className=" px-2  bg-transparent rounded "
                        value={selectedYear}
                        onChange={handleYearChange}
                      >
                        <option value="" disabled selected hidden>
                          Year
                        </option>
                        <option
                          value="2022"
                          className="bg-darkOrange text-white"
                        >
                          2022
                        </option>
                        <option
                          value="2023"
                          className="bg-darkOrange text-white"
                        >
                          2023
                        </option>
                        <option
                          value="2024"
                          className="bg-darkOrange text-white"
                        >
                          2024
                        </option>
                        <option
                          value="2024"
                          className="bg-darkOrange text-white"
                        >
                          2025
                        </option>
                      </select>
                    </div>
                  </div>
                  {selectedYear && (
                    <div className="w-full h-[70%] ">
                      <LineChartRevenue
                        chartData={chartDataByYear[selectedYear]}
                        chartDataByYearPredicted={
                          chartDataByYearPredicted[selectedYear]
                        }
                        max={150}
                      ></LineChartRevenue>
                    </div>
                  )}
                </ChartCard>
                <SquareCard
                  className={"px-6 flex flex-col items-center gap-y-4  "}
                >
                  <div className="h-[30%] w-full pt-8 font-roboto font-medium text-xl text-black  ">
                    Traffic Sources
                  </div>
                  <div className="w-full h-[60%]">
                    <LineChartRevenue
                      chartData={chartData2}
                      max={120000}
                    ></LineChartRevenue>
                  </div>
                </SquareCard>
              </div>

              <div className="h-[40%] w-full flex gap-x-8">
                <SquareCard className={"px-6"}>
                  <div className="h-[30%] w-full pt-10 font-roboto font-medium text-xl text-black px-4 flex justify-between ">
                    <div>
                      <img src={usericon}></img>
                    </div>
                    <div className="flex items-center gap-x-2 ">
                      <img src={downarrow}></img>
                      <p className="text-sm">6.6%</p>
                    </div>
                  </div>
                  <div className="h-[70%]">
                    <p className="w-full text-3xl font-medium font-roboto h-11 text-dark-main py-12">
                      320.60K
                    </p>
                    <p className="w-full text-base font-medium font-roboto text-dark-main h-5">
                      Total Monthly Visit
                    </p>
                  </div>
                </SquareCard>

                <div className="h-[100%] w-[30%] flex flex-col gap-y-6 ">
                  <Card
                    className={"h-[50%] flex items-center justify-center p-6"}
                    img={moneyicon}
                    title={"Annual Net Income"}
                    amount={"$ 238.54 K"}
                  />
                  <Card
                    className={"h-[50%] flex items-center justify-center p-6"}
                    img={totalcustomericon}
                    title={"Total Customers"}
                    amount={"121546"}
                  />
                </div>

                <SquareCard className={"h-[100%] bg-red-500 flex items-center justify-center pt-10"}>
                  <img src={require('../assets/piechart.png')} className="h-[250px] w-[80%]"></img>
                </SquareCard>
              </div>
            </div>
            <div className="" style={{ flex: "30%" }}>
              <div className="px-6 pt-10 h-[100%] w-full ">
                <p className="text-4xl pb-18 font-medium font-roboto text-black h-[10%] px-8">
                  Coupons
                </p>
                <div className="w-full h-[90%] space-y-4 overflow-y-auto scrollbar-hidden ">
                  <Coupon discount="20% off" code="XXXXXX" />
                  <Coupon discount="30% off" code="XXXXXX" />
                  <Coupon discount="BUY 1 GET 1 FREE" code="XXXXXX" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
