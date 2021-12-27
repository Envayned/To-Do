import React, { Component, useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function ApiFetch(){
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);

    if (!post) return null;

    return (
        <div className=''>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}
