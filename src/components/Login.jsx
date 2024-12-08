import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import 'bootstrap/dist/css/bootstrap.min.css';  

import '../components/Login.css'
//import { Container, Row, Col } from 'react-bootstrap';
const Login = () => {
    const {register,handleSubmit,formState:{errors}} = useForm();

    const checkLogin = (data)=>{
      console.log("Form data",data)
      axios.post('http://localhost:3001/Users/login',data)
      .then(response=>{
        console.log(response.data)
        alert("Login successful")
      })
      .catch(eror=>console.log(error))
    }
  return (



    <div id="content" className="hero "  >
   <div className="container "  >  
      
       <div className="page-content page-container " id="page-content">
          <div className="padding " >
             <div className="row  "  >
                <div className="col-md-8" >
                   <div className="card  "  style={{ height:'380px'}}>
                      <div className="card-header m-2 p-3" ><strong>Login to your account</strong></div>
                      <div className="card-body">
      <form onSubmit={handleSubmit(checkLogin)}>

<div className="form-group">
 <label className="text-muted" for="exampleInputEmail1">
   Email address </label><br /> 
<input {...register("email")} type="email" className="m-1 " style={{width:'250px'}} placeholder='Enter email'/> <br />
<small id="emailHelp" class="form-text text-muted "  style={{fontSize:'small'}}>
We don't share email with anyone</small>
</div><br />
<div class="form-group">
 <label class="text-muted" for="exampleInputPassword1">
   Password 
   </label ><br />
<input {...register("password")} type="password" className="m-1" style={{width:'250px'}}  placeholder='Enter password'/>  <br />
 <small id="passwordHelp" class="form-text text-muted"style={{fontSize:'small'}}>
Your password is saved in encrypted form</small>
</div>

 
<button type="submit" className="btn btn-primary m-4" style={{width:'100px'
}}>Login</button>
</form>
</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
  
  )
}




export default Login