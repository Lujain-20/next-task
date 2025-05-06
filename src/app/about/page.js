import React from 'react';
import { auth } from '../auth';
async function AboutPage() {
 const user =await auth(); 
 console.log(user);
 
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-semibold mb-6 text-white-800">About Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-white-700">Our Story</h2>
          {(user)?<h1 className="text-2xl font-semibold mb-4 text-white-700">hello {user.user.name}</h1>: <h1 className="text-2xl font-semibold mb-4 text-white-700">hello guest</h1>}
          
          <p className="text-white-600 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Nullam sit
            amet turpis in libero viverra laoreet.  Donec accumsan magna nec
            nisi tincidunt, et fringilla justo tincidunt.  Sed hendrerit sem
            eget tortor pulvinar, vel pharetra nulla cursus.
          </p>        
        </div>
      </div> 
    </div>
  );
}
export default AboutPage;