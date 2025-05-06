import React from 'react';
import { signOut } from '../auth';
function Navbar() {
  async function out() {
    'use server'
     await signOut({ redirectTo: "/about" });
  }
  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
           <div className="text-xl font-semibold">
          My Website
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
          <a href="/about" className="hover:text-gray-300">
            About
          </a>
          <a href="/user" className="hover:text-gray-300">
            Users
          </a>
          <a href="/login" className="hover:text-gray-300">
            Login
          </a>
          {/* <a href='/signup'className='hover:text-grey-300'>signup</a> */}
        </div>
        
        <form action={out}>
          <button className='btn btn-primary' type='submit'>sign out</button>
          </form>
      
      </div>
      
      <div className="md:hidden bg-gray-800"> 
      </div>
    </nav>
  );
}

export default Navbar;