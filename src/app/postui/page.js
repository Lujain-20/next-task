"use client"
import React, { useState } from 'react'

function PostUi() {
    const [post, setPost] = useState([]);
    const [postInput, setInput] = useState("");

    async function getPost() {
        const res = await fetch("http://localhost:3000/post");
        const data = await res.json();
        setPost(data);
        console.log(data);
    }

    async function addPost() {
        await fetch("http://localhost:3000/post", {
            method: "POST",
            body: JSON.stringify({ title: postInput }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        getPost();
        setInput("");
    }

    // async function deletePost(id) {
    //     await fetch(`http://localhost:3000/post/${id}`, {
    //         method: "DELETE"
    //     });
    //     getPost(); 
    // }

    return (
        <div className="post-container">
            <button className="btn" onClick={getPost}>Get All Posts</button>
            <div className="post-list">
                {post.map((post) => (
                    <div key={post.id} className="post-item">
                        <h5>{post.title}</h5>
                        {/* <button className="btn btn-delete" onClick={() => deletePost(post.id)}>Delete</button> */}
                    </div>
                ))}
            </div>

            <input 
                value={postInput} 
                onChange={(e) => setInput(e.target.value)} 
                type="text" 
                placeholder='Enter post title' 
                className="post-input"
            />
            <button className='btn btn-primary' onClick={addPost}>Add Post</button>
        </div>
    )
}

export default PostUi;