import './App.css'
import { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'

function App() {
  const [data, setData] = useState();

  const getData = async () => {
    await axios.get("https://northwind.vercel.app/api/products")
      .then((response) => {
        setData(response.data)
      });
  }

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'Name', headerName: 'Name', width: 150 },
    { field: 'UnitPrice', headerName: 'Unit Price', width: 150 },
    { field: 'Stock', headerName: 'Stock', width: 150 },
    {
      field: "Actions", headerName: "Actions", width: 150, sortable: false, renderCell: (params) => {
        const onClick = async (e) => {
          e.stopPropagation();

          await axios.delete(`https://northwind.vercel.app/api/products/${params.id}`)
            .then((response) => {
              const newData = data.filter((item) => item.id !== params.id);
              setData(newData);
              console.log(response);
            });
        };
        return <button className='btn-delete' onClick={onClick}>Delete</button>;
      }
    }
  ]

  const rows = data ? data?.map((row) => {
    return {
      id: row.id,
      Name: row.name,
      UnitPrice: row.unitPrice,
      Stock: row.unitsInStock,
    }
  }) : []

  return (
    <>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 20,

            }
          }
        }}
        pageSizeOptions={[20]}
        sx={{ color: "white" }}
        getRowClassName={(params)=>params.row.Stock === 0 ? 'bg-zero' : ''}
      />
    </>
  )
}

export default App
