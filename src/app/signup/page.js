import React from 'react';
import { signUp } from '../auth'; 

function SignUp() {
  async function register(event) {
    event.preventDefault(); 
    const formData = new FormData(event.target);
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
    await signUp(data); 
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6"> SignUp</h2>
        {/* <form onSubmit={register}> */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="email"> email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">password </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            sign up
          </button>
        {/* </form> */}
      </div>
    </div>
  );
}

export default SignUp;