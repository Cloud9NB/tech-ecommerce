import { CardElement } from '@stripe/react-stripe-js';
import { Button } from 'react-bootstrap';

const StripePayButton = ({ user, paying }) => {
  const isDisabled = user.cart.count <= 0 || paying;
  const buttonText = paying ? 'Processing...' : 'Pay Now';

  return (
    <>
      <label htmlFor='card-element'>Card</label>
      <CardElement id='card-element' />
      <Button className='mt-3' type='submit' disabled={isDisabled}>
        {buttonText}
      </Button>
    </>
  );
};

export default StripePayButton;
