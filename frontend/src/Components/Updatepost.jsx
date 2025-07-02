import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { base_url } from '../constants';
import { toast } from 'react-toastify';


const Updatepost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: '',
    content: ''
  });

  const update = async () => {
    try {
      const res = await axios.get(`${base_url}/user/${id}`);
      const finalres = res.data;
      setForm({
        title: finalres.title,
        content: finalres.content
      });
    } catch (error) {
      console.log("Update error:", error);
    }
  };

  useEffect(() => {
    update();
  }, [id]);

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`${base_url}/user/${id}`,form);
      navigate('/');
      toast.success("Post Updated Successfully")
    } catch (error) {
      console.log("Error updating post:", error);
    }
  };

  return (
    <div className='h-full w-full  flex justify-center'>
        <div className=' w-1/3 h-60 bg-sky-400 flex flex-col justify-center items-center rounded-2xl   shadow-md p-6 hover:shadow-2xl' >
      <form onSubmit={handleSubmit} className='w-full' >
        <input 
          type="text" 
          name="title" 
          value={form.title} 
          onChange={handleInput} 
          placeholder="Title" 
           className='w-full p-2 mb-4 border border-gray-300 rounded-md ' 
        /><br /><br />
        <input 
          type="text" 
          name="content" 
          value={form.content} 
          onChange={handleInput} 
          placeholder="Content" 
        className='w-full p-2 mb-4 border border-gray-300 rounded-md ' 
        /><br /><br />
        <button 
        type="submit"
        className='w-full bg-sky-500 text-white font-semibold py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-950 focus:ring-opacity-50 '
        >Edit Post</button>
      </form>
    </div>
    </div>
  );
};

export default Updatepost;
