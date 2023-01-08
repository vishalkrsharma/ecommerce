import React, { useContext, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button, Form } from 'react-bootstrap';
import { Store } from '../Store';
import { useNavigate } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';

function ShippingScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    userInfo,
    cart: { shippingAddress },
  } = state;
  const [fullName, setFullName] = useState(shippingAddress.fullName || '');
  const [address, setAddress] = useState(shippingAddress.address || '');
  const [city, setCity] = useState(shippingAddress.city || '');
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode || '');
  const [country, setCountry] = useState(shippingAddress.country || '');

  useEffect(() => {
    if (!userInfo) {
      navigate('/signin?redirect=/shipping');
    }
  }, [userInfo, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: {
        fullName,
        address,
        city,
        postalCode,
        country,
      },
    });
    localStorage.setItem(
      'shippingAddress',
      JSON.stringify({
        fullName,
        address,
        city,
        postalCode,
        country,
      })
    );
    navigate('/payment');
  };

  return (
    <div>
      <Helmet>
        <title>Shipping Address</title>
      </Helmet>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <div className='container small-container'>
        <h1 className='my-3'>Shipping Address</h1>
        <Form onSubmit={submitHandler}>
          <Form.Label className='mt-2'>Full Name</Form.Label>
          <Form.Control value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          <Form.Label className='mt-2'>Address</Form.Label>
          <Form.Control value={address} onChange={(e) => setAddress(e.target.value)} />
          <Form.Label className='mt-2'>City</Form.Label>
          <Form.Control value={city} onChange={(e) => setCity(e.target.value)} />
          <Form.Label className='mt-2'>Postal Code</Form.Label>
          <Form.Control value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
          <Form.Label className='mt-2'>Country</Form.Label>
          <Form.Control value={country} onChange={(e) => setCountry(e.target.value)} />
          <div className='mt-3'>
            <Button type='submit' variant='primary'>
              Continue
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default ShippingScreen;
