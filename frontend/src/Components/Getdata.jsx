import React, { useEffect, useState } from 'react';
import { base_url } from '../constants';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Getdata() {
  const navigate = useNavigate();
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  const fetchdata = async () => {
    try {
      const fdata = await axios.get(`${base_url}/getAllpost`);
      const resultdata = fdata.data;
      setResult(resultdata.fdata);
      
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to fetch data."); // Error message
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  const deletedata = async (id) => {
    try {
      const res = await axios.delete(`${base_url}/delete/${id}`,{
        withCredentials:true,
        headers:{
          "Content-Type":"application/json",
        },
      });
      const fres = res.data;
      toast.success(fres.message); // Success message
      fetchdata(); // Refresh data after deletion
    } catch (error) {
      console.error("Error deleting data:", error);
      toast.error("Failed to delete the post."); // Error message
    }
  };

  useEffect(() => {
    fetchdata(); // Fetch data on component mount
  }); // Empty dependency array to run only once

  if (loading) {
    return <div className="text-center">Loading...</div>; // Loading indicator
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {result.map((items, index) => (
        <div 
          key={index} 
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-2xl transition-all duration-200 border border-gray-100"
        >
          <div className="flex flex-col h-full">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">{items.title}</h3>
            <p className="text-gray-600 mb-4 flex-grow line-clamp-3">{items.content}</p>
            <div className="flex space-x-3 mt-auto">
              <button onClick={() => { navigate(`/user/${items._id}`); }} className="px-3 py-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-sm">
                Edit
              </button>
              <button onClick={() => { deletedata(items._id); }} className="px-3 py-2 bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-sm">
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Getdata;
