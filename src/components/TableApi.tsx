// import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Post } from "./PostModel"; // Import the Post model
import SecoundTable1 from "./SecondTable1";
import SecondTable2 from "./SecondTable2";
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "title",
    headerName: "title",
    width: 150,
    editable: true,
  },
  {
    field: "body",
    headerName: "Body",
    width: 450,
    editable: true,
  },
];

export default function TableApi() {
  const [data, setData] = useState<Post[]>([]); // State to store the fetched data

  useEffect(() => {
    // Fetch data from the API using Axios
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data); // Set the fetched data to the state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(data);
  //HardCoded Data
  const data1 = [
    {
      department: "customer_service",
      sub_departments: ["support", "customer_success"],
    },
    {
      department: "design",
      sub_departments: ["graphic_design", "product_design", "web_design"],
    },
  ];

  const mappedData = data1.map((item) => {
    return {
      department: item.department,
      sub_departments: item.sub_departments,
    };
  });

  console.log(mappedData);

  return (
    <div>
      <Box sx={{ height: "400px", width: "100%" }}>
        <DataGrid
          rows={data} // Use the fetched data from the state
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
      <SecoundTable1 />
      <SecondTable2 />
    </div>
  );
}
