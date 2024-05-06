import React from "react";
import { useState, useEffect } from 'react';
import { useCart } from './context/cartContext';

import Card from './card';
import axios from 'axios'; 

function ProductList() {
  const [products, setProducts] = useState([]);
  const {addToCart} = useCart();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/productlist'); 
      setProducts(response.data);
    } catch (error) {
      alert('Error fetching products:', error);
    }
  };

  const handleProductCart = (product)=>{
    addToCart(product);
  }

  return (
    <div className='container'>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5'>
        {products.map((product, index) => (
          <div className='col' key={index}>
            <Card data={product} handlecart={handleProductCart}  />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
