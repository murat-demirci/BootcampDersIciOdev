import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home'
import ProductAdd from '../components/ProductAdd'
import Products from '../components/Products'

function Router(){
    const routes = [
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/products",
            element:<Products/>
        },
        {
            path:"/add-product",
            element:<ProductAdd/>
        }
    ];
    
    const router = createBrowserRouter(routes);
    
    return <RouterProvider router={router}/>
}

export default Router;