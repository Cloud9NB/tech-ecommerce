import { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../services/appApi';
import '../css/pages/Login.css';

const Login = () => {
  const [account, setAccount] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    setAccount(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [login, { error, isError, isLoading }] = useLoginMutation();

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    login(account).then(({ data }) => {
      if (data) navigate('/');
    });
  };

  return (
    <Container>
      <Row>
        <Col md={6} className='login__form--container'>
          <Form onSubmit={handleSubmit} className='login__form'>
            <h1>Login to your account</h1>
            {isError && <Alert variant='danger'>{error.data}</Alert>}
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

            <Form.Group>
              <Button type='submit' disabled={isLoading}>
                Login
              </Button>
            </Form.Group>

            <p>
              Don't have an account? <Link to='/signup'>Create an account</Link>
            </p>
          </Form>
        </Col>

        <Col md={6} className='login__image'></Col>
      </Row>
    </Container>
  );
};

export default Login;
