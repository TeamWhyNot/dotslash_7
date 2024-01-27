import React from "react";
import NavbarLogOut from "../components/NavbarLogOut";
import Sidebar from "../components/Sidebar";
import { DataGrid } from "@mui/x-data-grid";

const ShopKeeperOrderPage = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <div className="desktop h-[100vh]  flex">
      <div className="h-[100%] w-[25%] bg-red-300">Sidebar</div>
      <div className="h-[100%] w-[75%] ">
        <div className="px-8 py-16 flex gap-y-8 flex-col justify-center h-[20%] w-full ">
          <p className=" text-4xl font-semibold">My Orders</p>
          <p className="py text-xl font-semibold text-dark-main">
            Yet to be collected
          </p>
        </div>
        <div className="h-[70%] w-full ">
        
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[10, 15]}
              checkboxSelection
            />
          
        </div>
      </div>
    </div>
  );
};

export default ShopKeeperOrderPage;
