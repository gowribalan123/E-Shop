import React,{useState} from 'react'
//import {Outlet , Link} from 'react-router-dom'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

 import Home from '../components/Home.jsx'
import Product from '../components/Product.jsx';  
//import ProductList from '../components/ProductList.jsx';  
import Login from '../components/Login.jsx';
import Navigation from '../components/Navigation.jsx';
import SignUp from '../components/SignUp.jsx';


const [isAuthenticated,setIsAuthenticated]=useState(false)
const handlleLogout=()=>{
  setIsAuthenticated(false)
}

const handleLogin=()=>{
  setIsAuthenticated(true)
}


const router = createBrowserRouter(

    createRoutesFromElements(
    

      <Route path="/E-Shop/" element={<Navigation/>} >
         <Route path="/E-Shop/" element={<Home/>}/>
         <Route path="/E-Shop/signup" element={<SignUp/>}/>
        <Route path="/E-Shop/login" element={<Login  onLogin={handleLogin}/>}/>

         <Route path="/E-Shop/product"  element={<ProtectedRoute isAuthenticated={isAuthenticated}>
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