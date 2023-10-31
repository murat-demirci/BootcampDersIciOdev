import './App.css'
import { useFormik } from 'formik'
import { Grid, TextField } from '@mui/material'
import * as yup from 'yup'
import axios from 'axios'

function App() {
  const defaultSchema = yup.object({
    name: yup
      .string('Enter name')
      .required('Name is required'),
    stock: yup
      .number('Enter stock')
      .typeError("Please enter a number")
      .integer()
      .required('Stock is required'),
    unitPrice: yup
      .number('Enter unit price')
      .typeError("Please enter a number")
      .integer()
      .required('Unit price is required'),
    quantityPerUnit: yup
      .number('Enter quantity per unit price')
      .typeError("Please enter a number")
      .integer()
      .required('Quantity per unit price is required')
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      stock: '',
      unitPrice: '',
      quantityPerUnit: '',
    },
    validationSchema: defaultSchema,
    onSubmit: (values) => {
      addProduct(values)
    }
  })

  const addProduct = async (data) => {
    await axios.post("https://northwind.vercel.app/api/products", data)
      .then(res => {
        alert("Product added");
        console.log(res)
      })
      .catch((errors)=>{
        alert(`Product not added\n Errors: ${errors.message}`);
      })
  }

  return (
    <>
      <div className='base-container'>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2} >
            <Grid item xs={12} md={6} textAlign={'center'}>
              <TextField
                id='name'
                name='name'
                label='Name'
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name} />
            </Grid>
            <Grid item xs={12} md={6} textAlign={'center'}>
              <TextField
                id='stock'
                name='stock'
                label='Stock'
                value={formik.values.stock}
                onChange={formik.handleChange}
                error={formik.touched.stock && Boolean(formik.errors.stock)}
                helperText={formik.touched.stock && formik.errors.stock} />
            </Grid>
            <Grid item xs={12} md={6} textAlign={'center'}>
              <TextField
                id='unitPrice'
                name='unitPrice'
                label='Unit Price'
                value={formik.values.unitPrice}
                onChange={formik.handleChange}
                error={formik.touched.unitPrice && Boolean(formik.errors.unitPrice)}
                helperText={formik.touched.unitPrice && formik.errors.unitPrice} />
            </Grid>
            <Grid item xs={12} md={6} textAlign={'center'}>
              <TextField
                id='quantityPerUnit'
                name='quantityPerUnit'
                label='Qantity Per Unit'
                value={formik.values.quantityPerUnit}
                onChange={formik.handleChange}
                error={formik.touched.quantityPerUnit && Boolean(formik.errors.quantityPerUnit)}
                helperText={formik.touched.quantityPerUnit && formik.errors.quantityPerUnit} />
            </Grid>
            <Grid item xs={12}>
              <button type='submit'>Add</button>
            </Grid>
          </Grid>
        </form>
      </div>

    </>
  )
}

export default App
