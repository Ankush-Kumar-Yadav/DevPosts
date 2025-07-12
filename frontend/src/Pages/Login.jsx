import React, { useState } from 'react';
import axios from 'axios';
import { base_url } from '../constants';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        email: '',
        password: ''
    });

    function handleInput(e) {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();  
        
        console.log("Login data being sent:", login);  
        
        try {
            const response = await axios.post(
                `${base_url}/login`, 
                login,
                {
                    withCredentials: true  
                }
            );  
            console.log("Full response:", response);  
            
            const flogin = response.data;  
            console.log("Login successful:", flogin.message); 
            
            const token = flogin.token; 
            console.log("Token from response:", token);
            
            if (token) {
                localStorage.setItem("token", token);
                navigate('/'); // Navigate to the posts page after successful login
            } else {
                console.log("Token is undefined");
                toast.error("Login failed. Please try again."); // Error message
            }

            setLogin({
                email: '',
                password: ''
            });
            navigate('/')
        } catch (error) {
            console.log("Error in login:", error.response ? error.response.data : error.message);  
            toast.error("Login failed. Please check your credentials."); // Error message
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="email"
                            name='email'
                            value={login.email} 
                            onChange={handleInput}
                            placeholder='Enter email'
                            required 
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            name='password'
                            value={login.password}  
                            onChange={handleInput}
                            placeholder='Enter Your password'
                            required  
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <input 
                        type="submit" 
                        value="Login" 
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                    />
                    
                </form>
                  <Link to='/register' className='hover:text-amber-700 cursor-pointer font-medium'>Register User</Link>
            </div>
        </div>
    );
}

export default Login;
