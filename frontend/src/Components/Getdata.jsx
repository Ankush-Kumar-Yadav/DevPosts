import React, { useEffect } from 'react'
import { useState } from 'react'
import { base_url } from '../constants'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
 

 
 

function Getdata() {
  const navigate=useNavigate()
    const [result,setResult]=useState()
 const fetchdata=async()=>{
 const fdata= await axios.get(`${base_url}/get`) 
const resultdata=fdata.data
toast.success(resultdata.massage)
 setResult(resultdata)
  
}

const deletedata = async(id)=>{
 const res= await axios.delete(`${base_url}/user/${id}`)
 const fres=res.data
toast.success(fres.massage)

}


useEffect(()=>{
fetchdata() 
})
  return (
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
  {result &&
    result.map((items, index) => (
      <div 
        key={index} 
        className="bg-white rounded-lg shadow-md p-6 hover:shadow-2xl transition-all duration-200 border border-gray-100"
      >
        <div className="flex flex-col h-full">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">{items.title}</h3>
          <p className="text-gray-600 mb-4 flex-grow line-clamp-3">{items.content}</p>
          <div className="flex space-x-3 mt-auto">
            <button onClick={()=>{navigate(`/user/${items._id}`)}}  className="px-3 py-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-sm">
              Edit
            </button>
            <button onClick={()=>{deletedata(items._id)}} className="px-3 py-2 bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-sm">
              Delete
            </button>
          </div>
        </div>
      </div>
    ))}
</div>


  )
}

export default Getdata