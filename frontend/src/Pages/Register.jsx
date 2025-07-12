import React, { useState } from 'react';
import axios from 'axios';
import { base_url } from '../constants';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate= useNavigate()
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
    role: ''
  });

  function handleInput(e) {
    setRegister({
      ...register,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();  
    try {
      const response = await axios.post(`${base_url}/register`, register); 
      const fRegister = response.data; 
      setRegister({
        name: '',
        email: '',
        password: '',
        role: ''
      });
      
      navigate('/login');
    } catch (error) {
      console.log("Error in registering", error);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input 
              type="text"
              name="name"
              value={register.name}
              onChange={handleInput}
              placeholder='Enter your name'
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input 
              type="email"
              name="email"
              value={register.email}
              onChange={handleInput}
              placeholder='Enter your email'
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input 
              type="password"
              name="password"
              value={register.password}
              onChange={handleInput}
              placeholder='Enter your password'
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input 
              type="text"
              name="role"
              value={register.role}
              onChange={handleInput}
              placeholder='Enter your role'
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <input 
            type="submit" 
            value="Register" 
            
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
          />
        </form>
      </div>
    </div>
  );
}

export default Register;
