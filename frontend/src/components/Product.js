import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import Rating from './Rating';

function Product({ product }) {
  return (
    <Card className='p-2' key={product.slug}>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className='card-img-top' alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>₹{product.price}</Card.Text>
      </Card.Body>
      <Button variant='primary'>Add to cart</Button>
    </Card>
  );
}

export default Product;
