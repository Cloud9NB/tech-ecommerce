import {
  Alert,
  Col,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from 'react-bootstrap';

const CheckoutForm = ({
  setState,
  alertMessage,
  user,
  address,
  postalCode,
  country,
  phoneNumber,
  city,
}) => {
  const handleChange = e => {
    setState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <Row>
        {alertMessage && <Alert>{alertMessage}</Alert>}
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
              value={address}
              onChange={handleChange}
              required
            ></FormControl>
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup className='mb-3'>
            <FormLabel>City</FormLabel>
            <FormControl
              type='text'
              placeholder='City'
              name='city'
              value={city}
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
              value={postalCode}
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
              value={country}
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
              value={phoneNumber}
              onChange={handleChange}
              maxLength='10'
              pattern='[0-9]{3}[0-9]{3}[0-9]{4}'
              required
            ></FormControl>
          </FormGroup>
        </Col>
      </Row>
    </>
  );
};

export default CheckoutForm;
