import { redirect } from 'next/dist/server/api-utils'
import { notFound } from 'next/navigation'
import React from 'react'



 async function details({params}) {
  
   
let user
    const id= await params
try{
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id.userid}`)
     user = await res.json()
     console.log(user);
     
}
catch(err){
    // console.log(`Error: ${err}`);
    // redirect("/not-found")
    notFound()
    
  }
  return (
    <>
    <div className="p-10 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
          <h3 className="text-md text-gray-600">@{user.username}</h3>
          <p className="text-sm text-gray-500 mt-2">{user.email}</p>
        </div>
      </div>
    </div>
  
      
    </>
  )
}

export default details