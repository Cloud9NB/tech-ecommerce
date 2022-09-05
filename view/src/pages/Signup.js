import { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/pages/Signup.css';
import { useSignupMutation } from '../services/appApi';

const Signup = () => {
  const [account, setAccount] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [signup, { error, isLoading, isError }] = useSignupMutation();

  const handleChange = e => {
    setAccount(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    signup(account);
  };

  return (
    <Container>
      <Row>
        <Col md={6} className='signup__form--container'>
          <Form onSubmit={handleSubmit} className='signup__form'>
            <h1>Create an account</h1>
            {isError && <Alert variant='danger'>{error.data}</Alert>}
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                name='name'
                placeholder='Enter name'
                value={account.name}
                onChange={handleChange}
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                name='email'
                placeholder='Enter Email'
                value={account.email}
                onChange={handleChange}
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                name='password'
                placeholder='Enter Password'
                value={account.password}
                onChange={handleChange}
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Button type='submit' disabled={isLoading}>
                Signup
              </Button>
            </Form.Group>

            <p>
              Have an account? <Link to='/login'>Login</Link>
            </p>
          </Form>
        </Col>

        <Col md={6} className='signup__image'></Col>
      </Row>
    </Container>
  );
};

export default Signup;
