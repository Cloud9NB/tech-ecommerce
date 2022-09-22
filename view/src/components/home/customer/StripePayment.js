import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import { useCreateOrderMutation } from '../../../services/appApi';
import StripePayButton from './StripePayButton';
import CheckoutForm from './CheckoutForm';

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
  const [createOrder, { isLoading, isError }] = useCreateOrderMutation();

  const onSubmit = async e => {
    e.preventDefault();
    if (!stripe || !elements || user.cart.count <= 0) return;

    setState(prev => ({ ...prev, paying: true }));

    const data = {
      amount: user.cart.total,
    };

    // my proxy here is not working, idk why
    const { client_secret } = await fetch(
      'http://localhost:8001/payment/create-payment',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }
    ).then(res => res.json());

    console.log(client_secret);

    const { paymentIntent } = await stripe.confirmCardPayment(client_secret, {
      payment_method: { card: elements.getElement(CardElement) },
    });

    console.log(paymentIntent);

    setState(prev => ({ ...prev, paying: false }));

    // if (paymentIntent) {
    //   const order = {
    //     userId: user._id,
    //     cart: user.cart,
    //     address: state.address,
    //     city: state.city,
    //     postalCode: state.postalCode,
    //     country: state.country,
    //     phoneNumber: state.phoneNumber,
    //   };

    // createOrder({ order }).then(res => {
    //   if (!isLoading && !isError) {
    //     setState(prev => ({
    //       ...prev,
    //       alertMessage: `Payment ${paymentIntent.status}`,
    //     }));

    //     setTimeout(() => navigate('/orders'), 2000);
    //   }
    // });
    // }
  };

  return (
    <Form onSubmit={onSubmit}>
      <CheckoutForm
        setState={setState}
        alertMessage={state.alertMessage}
        user={user}
        address={state.address}
        postalCode={state.postalCode}
        country={state.country}
        phoneNumber={state.phoneNumber}
      />

      <StripePayButton user={user} paying={state.paying} />
    </Form>
  );
};

export default StripePayment;
