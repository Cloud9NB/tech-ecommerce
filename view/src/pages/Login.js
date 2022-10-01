import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../services/appApi';
import ErrorMessage from '../components/ErrorMessage';
import '../css/pages/Login.css';

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    setState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [login, { error, isError, isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = e => {
    const account = {
      email: state.email.toLowerCase(),
      password: state.password,
    };

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

            {isError && <ErrorMessage message={error.data} />}

            <Form.Group className='mb-3'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                name='email'
                placeholder='Enter Email'
                value={state.email}
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
                value={state.password}
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
