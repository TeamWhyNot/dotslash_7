import React from "react";
import NavbarLogOut from "../components/NavbarLogOut";
import Sidebar from "../components/Sidebar";
import { DataGrid } from "@mui/x-data-grid";

const ShopKeeperOrderPage = () => {
  const columns = [
    { field: "tokenID", headerName: "TokenID", width: 170 },
    { field: "date", headerName: "Date", width: 130 },
    { field: "customer", headerName: "Customer", width: 130 },
    {
      field: "payableAmount",
      headerName: "Payable Amount",
      type: "number",
      width: 130,
    },
    {
      field: "paidAmount",
      headerName: "Paid Amount",
      type: "number",
      width: 130,
    },
  ];

  const rows = [
    {
      id: 1,
      tokenID: "#AHGA68",
      date: "23/09/2022",
      customer: "Toyash Patil",
      payableAmount: 100,
      paidAmount: 0.0,
    },
    {
      id: 2,
      tokenID: "#AHGA69",
      date: "24/09/2022",
      customer: "Jiya Trivedi",
      payableAmount: 150,
      paidAmount: 50.0,
    },
    {
      id: 3,
      tokenID: "#AHGA70",
      date: "25/09/2022",
      customer: "Atharva Upare",
      payableAmount: 120,
      paidAmount: 80.0,
    },
    {
      id: 4,
      tokenID: "#AHGA71",
      date: "26/09/2022",
      customer: "Manas Waghmare",
      payableAmount: 80,
      paidAmount: 30.0,
    },
    {
      id: 5,
      tokenID: "#AHGA72",
      date: "27/09/2022",
      customer: "Suresh Singh",
      payableAmount: 200,
      paidAmount: 150.0,
    },
    {
      id: 6,
      tokenID: "#AHGA73",
      date: "28/09/2022",
      customer: "Sania Sharma",
      payableAmount: 90,
      paidAmount: 60.0,
    },
    {
      id: 7,
      tokenID: "#AHGA74",
      date: "29/09/2022",
      customer: "George Brown",
      payableAmount: 110,
      paidAmount: 70.0,
    },
    {
      id: 8,
      tokenID: "#AHGA75",
      date: "30/09/2022",
      customer: "Arun Shetty",
      payableAmount: 130,
      paidAmount: 100.0,
    },
    {
      id: 9,
      tokenID: "#AHGA76",
      date: "01/10/2022",
      customer: "Mike Tyson",
      payableAmount: 180,
      paidAmount: 130.0,
    },
    {
      id: 10,
      tokenID: "#AHGA77",
      date: "02/10/2022",
      customer: "Jayesh Sutaria",
      payableAmount: 250,
      paidAmount: 200.0,
    },
    {
      id: 11,
      tokenID: "#AHGA78",
      date: "03/10/2022",
      customer: "Oliver Lee",
      payableAmount: 70,
      paidAmount: 20.0,
    },
    {
      id: 12,
      tokenID: "#AHGA79",
      date: "04/10/2022",
      customer: "Patricia Garcia",
      payableAmount: 160,
      paidAmount: 120.0,
    },
    {
      id: 13,
      tokenID: "#AHGA80",
      date: "05/10/2022",
      customer: "Quincy Adams",
      payableAmount: 140,
      paidAmount: 110.0,
    },
    {
      id: 14,
      tokenID: "#AHGA81",
      date: "06/10/2022",
      customer: "Rachel White",
      payableAmount: 190,
      paidAmount: 140.0,
    },
    {
      id: 15,
      tokenID: "#AHGA82",
      date: "07/10/2022",
      customer: "Samuel Turner",
      payableAmount: 120,
      paidAmount: 90.0,
    },
    {
      id: 16,
      tokenID: "#AHGA83",
      date: "08/10/2022",
      customer: "Tina Moore",
      payableAmount: 100,
      paidAmount: 40.0,
    },
    {
      id: 17,
      tokenID: "#AHGA84",
      date: "09/10/2022",
      customer: "Ulysses Lewis",
      payableAmount: 220,
      paidAmount: 180.0,
    },
    {
      id: 18,
      tokenID: "#AHGA85",
      date: "10/10/2022",
      customer: "Violet Smith",
      payableAmount: 200,
      paidAmount: 160.0,
    },
    {
      id: 19,
      tokenID: "#AHGA86",
      date: "11/10/2022",
      customer: "William Taylor",
      payableAmount: 130,
      paidAmount: 80.0,
    },
    {
      id: 20,
      tokenID: "#AHGA87",
      date: "12/10/2022",
      customer: "Xander Johnson",
      payableAmount: 110,
      paidAmount: 50.0,
    },
  ];

  return (
    <div className="desktop h-[100vh]  fade flex flex-col ">
      {/* <div className="h-[100%] w-[25%] flex gap-6">
        <Sidebar></Sidebar>
      </div> */}
      <NavbarLogOut></NavbarLogOut>

      <div className="h-[100%] w-[100%] ">
        <div className="px-8 py-12 flex gap-y-8 flex-col items-center justify-center h-[20%] w-full  ">
          <p className=" text-4xl font-semibold text-darkOrange">My Orders</p>
          <p className=" text-xl font-semibold text-dark-main">
            Yet to be collected
          </p>
        </div>
        <div className="w-full flex items-center justify-center px-2">
          <div className="h-[50%] w-fit flex items-start justify-start">
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopKeeperOrderPage;
