// src/pages/Home.js  
import React, { useEffect, useState } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';  
import '../components/Product.css'

const Product = () => {  
  const [products, setProducts] = useState([]);  

  useEffect(() => {  
    const fetchProducts = async () => {  
      const response = await axios.get(`https://productsapi-2hx0.onrender.com/products`); // Replace with your API endpoint  
      setProducts(response.data);  
    };  
    fetchProducts();  
  }, []);  

  return (  
<>
    <div className="container  hero   p-4 "  >  
      
      <div className=" row  " >  
        {products.map(product => (  
          <div   key={product._id}  className='col-sm-3 col-md-3 text-center' style={{marginBottom: '10px'}}>  
            <div  className="card mb-3">  
            <div>
                <img src={product.image} alt={product.name} className="card-img-top p-1 md-2  rounded-pill shadow-sm" style={{width: '120px', height: '100px'}} />  
            </div>
             <div className="card-body">  
                <h5 className="card-title" style={{height:'100px'}}>{product.name}</h5>  
                  
                <p className="card-text"><strong>Price: ${product.price}</strong></p>  
                <Link to={`/products/${product._id}`} className="btn btn-warning " style={{backgroundColor:'yellow', borderRadius:'20px',color:'black'}}>Add to Cart</Link>  
              </div>  
            </div>  
          </div>  
        ))}  
      </div>  
    </div>  
    </>
  );  
};  

export default Product;