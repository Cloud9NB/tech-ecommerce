import { useSelector } from 'react-redux';
import { useState } from 'react';
import {
  Alert,
  Col,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from 'react-bootstrap';
import StripePayButton from './StripePayButton';

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

  const handleChange = e => {
    setState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Col className='cart-payment__container'>
      <Row>
        {state.alertMessage && <Alert>{state.alertMessage}</Alert>}
        <Col md={6}>
          <FormGroup className='mb-3'>
            <FormLabel>Full Name</FormLabel>
            <FormControl
              type='text'
              placeholder='Full Name'
              value={user.name}
              disabled
              required
            ></FormControl>
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup className='mb-3'>
            <FormLabel>Email</FormLabel>
            <FormControl
              type='text'
              placeholder='Email'
              value={user.email}
              disabled
              required
            ></FormControl>
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <FormGroup className='mb-3'>
            <FormLabel>Address</FormLabel>
            <FormControl
              type='text'
              placeholder='Address'
              name='address'
              value={state.address}
              onChange={handleChange}
              required
            ></FormControl>
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup className='mb-3'>
            <FormLabel>Postal Code</FormLabel>
            <FormControl
              type='text'
              placeholder='Postal Code'
              name='postalCode'
              value={state.postalCode}
              maxLength='6'
              onChange={handleChange}
              required
            ></FormControl>
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup className='mb-3'>
            <FormLabel>Country</FormLabel>
            <FormControl
              type='text'
              placeholder='Country'
              name='country'
              value={state.country}
              onChange={handleChange}
              required
            ></FormControl>
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup className='mb-3'>
            <FormLabel>Phone Number</FormLabel>
            <FormControl
              type='tel'
              placeholder='Phone Number'
              name='phoneNumber'
              value={state.phoneNumber}
              onChange={handleChange}
              maxLength='10'
              pattern='[0-9]{3}[0-9]{3}[0-9]{4}'
              required
            ></FormControl>
          </FormGroup>
        </Col>
      </Row>

      <StripePayButton
        user={user}
        address={state.address}
        city={state.city}
        postalCode={state.postalCode}
        country={state.country}
        phoneNumber={state.phoneNumber}
        paying={state.paying}
        setState={setState}
      />
    </Col>
  );
};

export default StripePayment;
