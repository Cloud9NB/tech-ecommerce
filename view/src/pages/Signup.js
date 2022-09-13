import { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useSignupMutation } from '../services/appApi';
import '../css/pages/Signup.css';

const Signup = () => {
  const [account, setAccount] = useState({
    name: '',
    email: '',
    password: '',
    passwordVerify: '',
  });

  const [signup, { error, isLoading, isError }] = useSignupMutation();

  const handleChange = e => {
    setAccount(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    signup(account).then(({ data }) => {
      if (data) navigate('/');
    });
  };

  return (
    <Container>
      <Row>
        <Col md={6} className='signup__form--container'>
          <Form onSubmit={handleSubmit} className='signup__form'>
            <h1>Create an account</h1>
            {isError && <Alert variant='danger'>{error.data}</Alert>}
            <Form.Group className='mb-3'>
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

            <Form.Group className='mb-3'>
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

            <Form.Group className='mb-3'>
              <Form.Label>Re-Password</Form.Label>
              <Form.Control
                type='password'
                name='passwordVerify'
                placeholder='Re-Enter Password'
                value={account.passwordVerify}
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
