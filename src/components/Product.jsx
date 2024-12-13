// src/pages/Home.js  
import React, { useEffect, useState } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';  
import '../components/Product.css'

const Product = () => {  
  const [products, setProducts] = useState([]);  
  const apiUrl=import.meta.env.VITE_PRODUCTS_API
    
  useEffect(() => {  
    const fetchProducts = async () => {  
      const response = await axios.get(`${apiUrl}/products`); // Replace with your API endpoint  
      setProducts(response.data);  
    };  
    fetchProducts();  
  }, []);  

  return (  
<>
    <div className="container  p-4"  style={{backgroundColor:'#8781d6e3'}}>  
      
      <div className=" row text-center    " >  
        {products.map(product => (  
          <div   key={product._id}  className='col-md-3 text-center  ' style={{marginBottom: '10px'}}>  
            <div  className="card mb-3 shadow-sm " style={{width: '300px',height:'400px'}}>  
            <div >
                <img src={product.image} alt={product.name} className="card-img-top p-1 md-2   shadow-sm" style={{width: '200px', height: '200px'}} />  
            </div>
             <div className="card-body text-center ">  
                <h5 className="card-title " style={{height:'80px'}}>{product.name}</h5>  
                  
                <p className="card-text"><strong>Price: ${product.price}</strong></p>  
                <Link to={`/products/${product._id}`} className="btn btn-warning " style={{ borderRadius:'20px',width:'150px'}}><strong>Add to Cart</strong></Link>  
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