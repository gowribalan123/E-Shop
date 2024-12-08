import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';  
import Product from '../components/Product';
import Navigation from './Navigation';


const Home = () => {
  return (
  <>
    <header class="hero " style={{height:'500px'}}>
    <div class="container m-5 ">
        <h1>Welcome to My E-commerce Store</h1>
        <p>Find the best products at unbeatable prices!</p>
        <a href="#product" class="btn btn-primary"><Link to='/ShoppingCart/product' className="nav-link ">Shop Now</Link></a>
        
        <div class="p-5"> 
        <img src="bg4.png" height="200px"  width="300px" alt="" />
        </div>
        
    </div>
</header>
</>
  )
}

export default Home