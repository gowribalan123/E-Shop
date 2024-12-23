import React, { useEffect, useState } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';   
import 'bootstrap/dist/css/bootstrap.min.css';  
import '../components/Product.css';  

const Product = () => {  
  const [products, setProducts] = useState([]);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  
  const apiUrl = import.meta.env.VITE_PRODUCTS_API;  

  useEffect(() => {  
    const fetchProducts = async () => {  
      try {  
        const response = await axios.get(`${apiUrl}/products`);  
        setProducts(response.data);  
      } catch (error) {  
        setError('Failed to load products. Please try again later.');  
        console.error(error);  
      } finally {  
        setLoading(false);  
      }  
    };  
    fetchProducts();  
  }, []);  

  return (  
    <>
    <header className="" style={{ padding: '15px' }}>  
      <div className="container p-4" style={{ background: '#583059' }}>  
        <div className="row text-center">  
          {loading && <div className="col-12">Loading products...</div>}  
          {error && <div className="col-12 alert alert-danger">{error}</div>}  
          {products.map(product => (  
            <div key={product._id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 text-center" style={{marginBottom: '10px'}}>  
              <div className="card mb-3 shadow-sm" style={{width: '300px', height: '400px' }}>  
                <div>  
                  <img src={product.image} alt={product.name} className="card-img-top p-1 md-2 shadow-sm img-fluid" style={{width: '200px', height: '200px'}}  />  
                </div>  
                <div className="card-body text-center">  
                  <h5 className="card-title" style={{ height: '80px' }}>{product.name}</h5>  
                  <p className="card-text"><strong>Price: ${product.price}</strong></p>  
                  <Link to={`/products/${product._id}`} className="btn btn-warning" style={{ borderRadius: '20px', width: '150px' }}>  
                    <strong>Add to Cart</strong>  
                  </Link>  
                </div>  
              </div>  
            </div>  
          ))}  
        </div>  
      </div>  
    </header>  
    </>
  )
} 

export default Product;