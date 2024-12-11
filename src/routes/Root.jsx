import React,{useState} from 'react'
//import {Outlet , Link} from 'react-router-dom'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

 import Home from '../components/Home.jsx'
import Product from '../components/Product.jsx';  
//import ProductList from '../components/ProductList.jsx';  
import Login from '../components/Login.jsx';
import Navigation from '../components/Navigation.jsx';


const [isAuthenticated,setIsAuthenticated]=useState(false)
const handlleLogout=()=>{
  setIsAuthenticated(false)
}

const handleLogin=()=>{
  setIsAuthenticated(true)
}


const router = createBrowserRouter(

    createRoutesFromElements(
    

      <Route path="/ShoppingCart/" element={<Navigation/>} >
         <Route path="/ShoppingCart/" element={<Home/>}/>
        <Route path="/ShoppingCart/login" element={<Login  onLogin={handleLogin}/>}/>

         <Route path="/ShoppingCart/product"  element={<ProtectedRoute isAuthenticated={isAuthenticated}>
             <Product onLogout={handlleLogout}/>
          </ProtectedRoute>}
          />
      
        
    </Route>
    )
)

const Root = () => {

  

  
  return (
    
    <div>
        <RouterProvider router={router} />
    </div>
  )
}



function ProtectedRoute({isAuthenticated,children}){
  return isAuthenticated?children:<Navigate to="/ShoppingCart/login"/>
}
export default Root