// src/SignUp.jsx
import React, { useState } from 'react';
import axios from 'axios'
import { useForm } from 'react-hook-form'
import '../components/SignUp.css'

import { useNavigate } from 'react-router-dom';





const SignUp = ({onSignUp}) => {
           const {register,handleSubmit,formState:{errors},reset} = useForm();

            const apiUrl=import.meta.env.VITE_PRODUCTS_API
             const navigate=useNavigate()


      const checkRegister = async (data) => {  
        try {    
      
          const response = await axios.post(`${apiUrl}/users`, data);  
          console.log(response.data);  
          alert("Registration Successful");  
          reset();  // Clear form fields on successful registration  
          navigate('/E-Shop/login');  
        } catch (error) {  
          console.error(error);  
          alert("Registration Failed. Please try again."); // User feedback  
        }  
      }  

  return (
    <>
    <header style={{height:'530px',padding:'15px'}}>
  
    <div className="signup-container"  style={{backgroundColor:'white'}} >
   
      <h2>Sign Up</h2>


      <form onSubmit={handleSubmit(checkRegister)}>
      
      <div>
          <label htmlFor="name">Name:</label>
          <input  id="name"  {...register("name", { required: 'Name is required' })}  type="text"  placeholder='Enter name'/>
           
          {errors.name && <p className="error">{errors.name.message}</p>}  
          
        </div>

        <div>
          <label htmlFor="username">Username:</label>
          <input  id="username" {...register("username", { required: 'Username is required' })}  type="text" placeholder='Enter username'/>
           
           
          {errors.username && <p className="error">{errors.username.message}</p>}
        </div>



        <div>
          <label htmlFor="email">Email address:</label>
          <input  id="email" {...register("email", { required: 'Email is required' })} type="email"  placeholder='Enter email'/>
         
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>



        <div>
          <label htmlFor="password">Password:</label>
          <input  id="password" {...register("password", { required: 'Password is required',minLength: {value: 6, message: 'Password must be at least 6 characters'} })} type="password"  placeholder='Enter password'/>
            
          {errors.password && <p className="error">{errors.password.message}</p>}
        </div>


        <button type="submit"  className="btn btn-primary">Sign Up</button>
       
       
   {/*
        <div>
        <label htmlFor="confirmpassword"> Confirm Password:</label>
        <input id="confirmpassword" {...register("confirmpassword", { required: 'Confirm Password is required' })}  type="password" name="confirmPassword" placeholder="Enter Confirm Password" value={data.confirmPassword} onChange={handleChange} />  
      {errors.confirmPassword && <span>{errors.confirmPassword}</span>}  
      </div>
       <button type="button" onClick={handleClear}>Clear</button>  
       */}
      </form>
    </div>
    </header>
    </>
  )
}

export default SignUp;