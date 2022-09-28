import { useRef } from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../services/appApi';
import '../css/pages/Login.css';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [login, { error, isError, isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = e => {
    const account = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
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
            {isError && <Alert variant='danger'>{error.data}</Alert>}
            <Form.Group className='mb-3'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                name='email'
                placeholder='Enter Email'
                ref={emailRef}
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                name='password'
                placeholder='Enter Password'
                ref={passwordRef}
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
