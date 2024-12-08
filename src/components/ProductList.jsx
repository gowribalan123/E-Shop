// src/pages/ProductPage.js  
import React, { useEffect, useState } from 'react';  
import axios from 'axios';  
import '../components/Product.css'
const ProductList = ({ match }) => {  
  const [product, setProduct] = useState(null);  
  const productId = match.params.id;  

  useEffect(() => {  
    const fetchProduct = async () => {  
      const response = await axios.get(`http://localhost:3001/products/${productId}`); // Adjust API endpoint  
      setProduct(response.data);  
    };  
    fetchProduct();  
  }, [productId]);  

  if (!product) return <div>Loading...</div>;  

  return (  
    <div className="container mt-5">  
      <h1>{product.name}</h1>  
      <img src={product.image} alt={product.name} className="img-fluid" />  
      <p>{product.description}</p>  
      <p className="h4">${product.price}</p>  
    </div>  
  );  
};  

export default ProductList;