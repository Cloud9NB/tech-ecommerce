import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import { useCreateOrderMutation } from '../../../services/appApi';
import StripePayButton from './StripePayButton';
import CheckoutInput from './CheckoutInput';

const StripePayment = () => {
  const user = useSelector(({ user }) => user);
  const [state, setState] = useState({
    alertMessage: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    phoneNumber: '',
    paying: false,
  });

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [createOrder, { isLoading, isError, isSuccess }] =
    useCreateOrderMutation();
  console.log(isSuccess);
  const onSubmit = async e => {
    e.preventDefault();
    if (!stripe || !elements || user.cart.count <= 0) return;
    setState(prev => ({ ...prev, paying: true }));

    const data = { amount: user.cart.total };

    const { client_secret } = await fetch('/payment/create-payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then(res => res.json());

    const { paymentIntent, error } = await stripe.confirmCardPayment(
      client_secret,
      {
        payment_method: { card: elements.getElement(CardElement) },
        receipt_email: user.email,
      }
    );

    console.log(paymentIntent);

    if (error) {
      setState(prev => ({ ...prev, alertMessage: error.message }));
    }

    setState(prev => ({ ...prev, paying: false }));

    if (paymentIntent) {
      // const order = {
      //   userId: user._id,
      //   cart: user.cart,
      //   address: state.address,
      //   city: state.city,
      //   postalCode: state.postalCode,
      //   country: state.country,
      //   phoneNumber: state.phoneNumber,
      // };

      // createOrder({ order }).then(res => {
      //   if (!isLoading && !isError) {
      //     setState(prev => ({
      //       ...prev,
      //       alertMessage: `Payment ${paymentIntent.status}`,
      //     }));

      setTimeout(() => navigate('/orders'), 2000);
      // }
      // });
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <CheckoutInput
        setState={setState}
        alertMessage={state.alertMessage}
        user={user}
        address={state.address}
        postalCode={state.postalCode}
        country={state.country}
        phoneNumber={state.phoneNumber}
        city={state.city}
        isSuccess={isSuccess}
      />

      <StripePayButton user={user} paying={state.paying} />
    </Form>
  );
};

export default StripePayment;
