import Link from 'next/link';
import React from 'react';
import { signOut } from '../auth';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';
function Navbar() {
  async function out() {
    'use server'
     await signOut("google", { redirectTo: "/about" });
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
          {/* <a href="/signup" className="hover:text-gray-300">
            sign out
          </a> */}
        
      </div>
      
      <div className="md:hidden bg-gray-800"> 
      </div>
    </nav>


    // //////////////////////////////////////////////////////
    // <>
    // <Navbar className="bg-gray-900 text-white py-4">
    //   <Container>
    //     <Nav className="me-auto">
    //       <Link href="/" className="text-xl font-semibold">
    //         My Website</Link>
    //         <Link href="/" className="hover:text-gray-300">
    //         Home</Link>
    //         <Link href="/about" className="hover:text-gray-300">
    //         About</Link>
    //         <Link href="/user" className="hover:text-gray-300">
    //         Users</Link>
    //         <Link href="/login" className="hover:text-gray-300">
    //         Login</Link>
    //     </Nav>

    //   </Container>
    // </Navbar>
    // </>
  );
}

export default Navbar;