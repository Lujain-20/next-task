import React from 'react';
import { signIn } from '../auth';

function Login() {
  async function loginn (){
    "use server"
    await signIn("google",{redirectTo:"/user"})

  }
  return (
    // <div className="flex items-center justify-center min-h-screen bg-gray-100">
    //   <div className="bg-white p-8 rounded-lg shadow-lg w-96">
    //     <h2 className="text-2xl font-bold text-center mb-6"> Log In</h2>
        <form action={loginn}>
          {/* <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">password </label>
            <input
              type="password"
              id="password"
             
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
           */}
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
           Log In
          </button>
         
          
        </form>
        
      // </div>
    // </div>
  );
}

export default Login;