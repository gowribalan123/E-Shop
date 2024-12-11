import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';  
import Home from './components/Home.jsx';
import Product from './components/Product.jsx';  
import Login from './components/Login.jsx';
//import Root from './routes/Root.jsx';
//import ErrorPage from './Error-Page.jsx';





createRoot(document.getElementById('root')).render(
  <StrictMode>
     <App/>
  </StrictMode>,
)
