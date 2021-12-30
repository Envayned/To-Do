import React, { Component, useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
// https://jsonplaceholder.typicode.com/posts/1
//127.0.0.1:8000/api/products/1
const baseURL = "http://localhost:8000/api/products/1";

export default function ApiFetch(){
    const [product, setProduct] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            // console.log(response.data.data);
            setProduct(response.data.data);
        });
    }, []);

    if (!product) return null;

    return (
        <div className=''>
            <h1 className=" m-4 font-black">PRODUCT</h1>
            <h1>Name: {product.name}</h1>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
        </div>
    );
}
