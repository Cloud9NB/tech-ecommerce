import { useRef } from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useSignupMutation } from '../services/appApi';
import '../css/pages/Signup.css';

const Signup = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordVerifyRef = useRef();

  const [signup, { error, isLoading, isError }] = useSignupMutation();
  const navigate = useNavigate();

  const handleSubmit = e => {
    const account = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      passwordVerify: passwordVerifyRef.current.value,
    };

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
                ref={nameRef}
                required
              ></Form.Control>
            </Form.Group>

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

            <Form.Group className='mb-3'>
              <Form.Label>Re-Password</Form.Label>
              <Form.Control
                type='password'
                name='passwordVerify'
                placeholder='Re-Enter Password'
                ref={passwordVerifyRef}
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
