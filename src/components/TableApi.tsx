import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Post } from "./PostModel"; // Import the Post model
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

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data} // Use the fetched data from the state
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
