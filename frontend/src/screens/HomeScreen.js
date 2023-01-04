import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import data from '../data';
import axios from 'axios';

function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('./api/products');
      console.log(res.data);
      setProducts(res.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Featured Products</h1>
      <div className='products'>
        {products.map((product) => (
          <div className='product' key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className='product-info'>
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
            </div>
            <p>₹{product.price}</p>
            <button>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
