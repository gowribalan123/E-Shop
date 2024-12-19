import React, { useEffect, useState } from 'react';  
import axios from 'axios';  
import { useForm } from 'react-hook-form';  
import 'bootstrap/dist/css/bootstrap.min.css';  
import '../components/Login.css';  
import { useNavigate } from 'react-router-dom';  

const Login = ({ onLogin }) => {  
    const { register, handleSubmit, formState: { errors }, reset } = useForm();  
    const apiUrl = import.meta.env.VITE_PRODUCTS_API;  
    const navigate = useNavigate();  
    const [loading, setLoading] = useState(false);  
    const [loginError, setLoginError] = useState('');  

    // Reset form fields when the component mounts  
    useEffect(() => {  
      console.log("Resetting form state"); 
        reset(); // This will set form fields to be empty  
    }, [reset]);  

    const checkLogin = async (data) => {  
        setLoading(true);  
        setLoginError('');  
        try {  
            const response = await axios.post(`${apiUrl}/users/login`, data);  
            console.log(response.data);  
            // Handle successful login  
            onLogin();  
            navigate('/E-Shop/product');  
            alert("Login successful");  
            reset(); // Clear form fields on successful login  
        } catch (error) {  
            console.error(error);  
            setLoginError("Login Failed. Please try again."); // Set error message for UI  
        } finally {  
            setLoading(false);  
        }  
    };  

    return (  
        <>  
            <header className="" style={{ height: '530px' }}>  
                <br /><br />  
                <div className="login-container" style={{ backgroundColor: 'white' }}>  
                    <h2>Login to your account</h2>  
                    <form onSubmit={handleSubmit(checkLogin)}>  
                        <div>  
                            <label htmlFor="email">Email address</label>  
                            <input  
                                id="email"  
                                {...register("email", { required: 'Email is required' })}  
                                type="email"  
                                placeholder='Enter email'  
                            />  
                            <br />  
                            {errors.email && <p>{errors.email.message}</p>}  
                            <small id="emailHelp" className="form-text text-muted" style={{ fontSize: 'small' }}>  
                                We don't share email with anyone  
                            </small>  
                        </div>  

                        <div>  
                            <label htmlFor="password">Password</label>  
                            <input  
                                id="password"  
                                {...register("password", { required: 'Password is required' })}  
                                type="password"  
                                placeholder='Enter password'  
                            />  
                            <br />  
                            {errors.password && <p>{errors.password.message}</p>}  
                            <small id="passwordHelp" className="form-text text-muted" style={{ fontSize: 'small' }}>  
                                Your password is saved in encrypted form  
                            </small>  
                        </div>  

                        {loginError && <p className="text-danger">{loginError}</p>}  
                        <button type="submit" className="btn btn-primary" disabled={loading}>  
                            {loading ? 'Logging in...' : 'Login'}  
                        </button>  
                    </form>  
                </div>  
            </header>  
        </>  
    );  
};  

export default Login;