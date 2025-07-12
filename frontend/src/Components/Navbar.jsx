import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
    <div className='bg-amber-800 text-white p-4 flex justify-between items-center px-8'>
      <div className='text-2xl font-bold'>Logo</div>
      <div className='flex gap-8'>
        <Link to='/' className='hover:text-amber-200 cursor-pointer font-medium'>Get All Posts</Link>
        <Link to='/login' className='hover:text-amber-200 cursor-pointer font-medium'>Login</Link>
        <Link to='/register' className='hover:text-amber-200 cursor-pointer font-medium'>Register</Link>
      </div>
    </div>
    </nav>
  );
}

export default Navbar;
