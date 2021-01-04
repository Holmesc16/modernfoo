import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import styled from 'styled-components';
// import dotenv from 'dotenv';

// dotenv.config({ path: './.env' });

const StyledDisabledCheckoutButton = styled.button`
  opacity: 0.5;
  cursor: 'not-allowed';
`;

let stripePromise;
const getStripe = () => {
  if (!stripePromise) stripePromise = loadStripe(process.env.STRIPE_PUB_KEY);
  return stripePromise;
};

const CheckoutButton = () => {
  const [loading, setLoading] = useState(false);

  const redirectToCheckout = async (e) => {
    e.preventDefault();
    setLoading(true);

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      mode: 'payment',
      lineItems: [{ price: 'price', quantity: 1 }],
      successUrl: `http://localhost:8000/`,
      cancelUrl: `http://localhost:8000/Merch/`,
    });
    if (error) {
      console.warn('Error: ', error);
      setLoading(false);
    }
  };

  return loading ? (
    <StyledDisabledCheckoutButton>Purchase</StyledDisabledCheckoutButton>
  ) : (
    <button type="submit" disabled={loading} onClick={redirectToCheckout}>
      Purchase
    </button>
  );
};

export default CheckoutButton;
