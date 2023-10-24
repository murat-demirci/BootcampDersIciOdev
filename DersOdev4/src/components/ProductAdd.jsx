import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function ProductAdd() {
  const url = "https://northwind.vercel.app/api/products/";
  const [name,setName] = useState();
  const [unitPrice,setUnitPrice] = useState();
  const [unitsInStock,setUnitsInStock] = useState();
  const navigate = useNavigate();

  const submitHandle = (event) => {
    event.preventDefault();
    axios.post(url,{
      body:{
        name,
        unitPrice,
        unitsInStock
      }
    })
    .then(() =>navigate("/"));
  }
  return (
    <>
      <div style={{display:"flex", alignItems:'center',justifyContent:'center',flexDirection:'column',minHeight:'100vh'}}>
        <form onSubmit={()=>submitHandle(event)}
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            gap:10
          }}>
          <div style={{width:'50%',textAlign:'center'}}>
            <label style={{display:'inline-block',textAlign:'right', width:100,marginRight:'10px'}}>Name</label>
            <input type="text" onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div style={{width:'50%',textAlign:'center'}}>
            <label style={{display:'inline-block',textAlign:'right', width:100,marginRight:'10px'}}>Unit Price</label>
            <input type="text"  onChange={(e)=>setUnitPrice(e.target.value)}/>
          </div>
          <div style={{width:'50%',textAlign:'center'}}>
            <label style={{display:'inline-block',textAlign:'right', width:100,marginRight:'10px'}}>Units In Stock</label>
            <input type="text"  onChange={(e)=>setUnitsInStock(e.target.value)}/>
          </div>
          <div style={{width:'50%',textAlign:'center'}}>
            <button style={{width:"100%",cursor:'pointer'}} type="submit">Add</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ProductAdd