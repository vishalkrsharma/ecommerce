import React, { useContext } from 'react';
import { Store } from '../Store';
import { Helmet } from 'react-helmet-async';
import { Row, Col, ListGroup, Button, Card } from 'react-bootstrap';
import MessageBox from '../components/MessageBox';
import { Link } from 'react-router-dom';

function CartScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  return (
    <div>
      <Helmet>
        <title>Shopping Cart</title>
      </Helmet>
      <h1>Shopping Cart</h1>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <MessageBox>
              Cart is Empty.
              <Link to='/'>Go shopping</Link>
            </MessageBox>
          ) : (
            <ListGroup>
              {cartItems.map((item) => (
                <ListGroup.Item key={item._id}>
                  <Row className='align-items-center'>
                    <Col md={4}>
                      <img src={item.image} alt={item.name} className='img-fluid rounded img-thumbnail' /> <Link to={`/product/${item.slug}`}>{item.name}</Link>
                    </Col>
                    <Col md={3}>
                      <Button variant='light' disabled={item.quantity === 1}>
                        <i className='fas fa-minus-circle' />
                      </Button>{' '}
                      <span>{item.quantity}</span>{' '}
                      <Button variant='light' disabled={item.quantity === item.countInStock}>
                        <i className='fas fa-plus-circle' />
                      </Button>
                    </Col>
                    <Col md={3}>₹{item.price}</Col>
                    <Col md={2}>
                      <Button variant='light'>
                        <i className='fas fa-trash' />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h3>
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)} items) : ₹ {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                  </h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className='d-grid'>
                    <Button type='button' variant='primary' disable={cartItems.length === 0}>
                      Proceed to Checkout
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default CartScreen;
