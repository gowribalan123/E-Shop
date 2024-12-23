import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';  
import Product from '../components/Product';
 


const Home = () => {
  return (
  <>
    <header className="hero" style={{height:'560px'}}>
    <div className="container m-5 ">
        <h1>Welcome to My E-commerce Store</h1>
        <p>Find the best products at unbeatable prices!</p>
        <button className="btn btn-primary"><Link to='/E-Shop/product' className="nav-link ">Shop Now</Link></button>
        
        <div className="p-5"> 
        <img src="bg4.png" height="200px"  width="300px" alt="" />
        </div>
        
    </div>
</header>
</>
  )
}

export default Home