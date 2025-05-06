'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import React from 'react'

function Users() {
    const router = useRouter();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((users) => setData(users))
            .catch((err) => console.log(err));
    }, []);

    const goToDetails = (userId) => {
        router.push(`/user/${userId}`);
    };
    return (
        <>
            <div className="p-10 bg-gray-100 min-h-screen">
                <h1 className="text-3xl font-bold text-center mb-10 text-blue-600">Users List</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((user) => (
                        <div
                            key={user.id}
                            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
                        >
                            <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
                            <h3 className="text-md text-gray-600">@{user.username}</h3>
                            <p className="text-sm text-gray-500 mt-2">{user.email}</p>
                            <button
                                type="button"
                                className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={() => goToDetails(user.id)}
                            >
                                Details
                            </button>

                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Users