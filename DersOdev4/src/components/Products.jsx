import { useEffect, useState } from "react";
import axios from "axios"

function Products() {
  const url = "https://northwind.vercel.app/api/products/";

  const [products, setProducts] = useState(null);

  const fetchProducts = () => {
    axios.get(url)
      .then(response => setProducts(response.data));
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  const deleteRow = (productId) => {
    axios.delete(url + `${productId}`);
    const newProduct = products.filter(product => product.id !== productId)
    setProducts(newProduct)
  }

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
    }}>
      <table style={{
        width: '100%',
        textAlign: 'center',
      }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Unit Price</th>
            <th>Units In Stock</th>
            <th>-</th>
          </tr>
        </thead>
        <tbody>
          {products && products.map(product => (
            <tr style={product.unitsInStock === 0 ? { backgroundColor: 'red' } : { backgroundColor: 'transparent' }} key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.unitPrice}</td>
              <td>{product.unitsInStock}</td>
              <td style={{ backgroundColor: 'white' }}>
                <button style={{
                  backgroundColor: 'red',
                  border: 'none',
                  color: 'white',
                  padding: 10,
                  borderRadius: 5,
                  cursor: 'pointer',
                }}
                  onClick={() => { deleteRow(product.id) }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Products