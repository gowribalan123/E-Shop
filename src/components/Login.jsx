import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import 'bootstrap/dist/css/bootstrap.min.css';  

import '../components/Login.css'
import { useNavigate } from 'react-router-dom';


//import { Container, Row, Col } from 'react-bootstrap';
const Login = ({onLogin}) => {

    const {register,handleSubmit,formState:{errors}} = useForm();

   const apiUrl=import.meta.env.VITE_PRODUCTS_API
   
    const navigate=useNavigate()
    const checkLogin = (data)=>{
      console.log("Form data",data)
      axios.post(`${apiUrl}/users/login`,data)
      .then(response=>{
        console.log(response.data)
        onLogin()
        navigate('/ShoppingCart/product')

        alert("Login successful")
      })
      .catch(eror=>console.log(error))
    }
  return (



    
   <div className="login-container "  >  
      
      
 <h2>Login to your account</h2>
   
      <form onSubmit={handleSubmit(checkLogin)}>

<div>
 <label  for="exampleInputEmail1">
   Email address </label>
<input {...register("email")} type="email"  placeholder='Enter email'/> <br />
<small id="emailHelp" className="form-text text-muted "  style={{fontSize:'small'}}>
We don't share email with anyone</small>
</div>
<div >
 <label  for="exampleInputPassword1">
   Password 
   </label >
<input {...register("password")} type="password"   placeholder='Enter password'/>  <br />
 <small id="passwordHelp" class="form-text text-muted" style={{fontSize:'small'}}>
Your password is saved in encrypted form</small>
</div>

 
<button type="submit" className="btn btn-primary"  >Login</button>
</form>
</div>
                  
            
   
  
  )
}




export default Login