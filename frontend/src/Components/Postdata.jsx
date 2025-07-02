import axios from 'axios';
import React, { useState } from 'react';
import { base_url } from '../constants';
import { toast } from 'react-toastify';



function Postdata() {
  const [get, setGet] = useState({
    title: '',
    content: ''
  });

  function handleInput(e) {
    setGet({
      ...get,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const post = await axios.post(`${base_url}/post`, get);
      console.log("Post created successfully", post);
     
       toast.success("Post Created SuccessFully")

        setGet({
    title: '',
    content: ''
  })
    } catch (err) {
      console.error("Error posting data", err);
    }

  }

  return (
    <div className='h-full w-full  flex justify-center'>
   <div className=' w-1/3 h-60 bg-sky-400 flex flex-col justify-center items-center rounded-2xl   shadow-md p-6 hover:shadow-2xl'>
  <form onSubmit={handleSubmit} className='w-full'>
    <input 
      type="text" 
      name="title" 
      value={get.title} 
      onChange={handleInput} 
      placeholder="Enter title" 
      className='w-full p-2 mb-4 border border-gray-300 rounded-md ' 
    />
    <input 
      type="text" 
      name="content" 
      value={get.content} 
      onChange={handleInput} 
      placeholder="Enter content" 
      className='w-full p-2 mb-4 border border-gray-300 rounded-md ' 
    />
    <input 
      type="submit" 
      value="Post Data" 
      className='w-full bg-sky-500 text-white font-semibold py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-950 focus:ring-opacity-50 ' 
    />
  </form>
</div>
</div>
  );
}

export default Postdata;
