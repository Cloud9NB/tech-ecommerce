import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/pages/Signup.css';

const Signup = () => {
  const [signup, setSignup] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    setSignup(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Container>
      <Row>
        <Col md={6} className='signup__form--container'>
          <Form onSubmit={handleSubmit} className='signup__form'>
            <h1>Create an account</h1>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                name='email'
                placeholder='Enter Email'
                value={signup.email}
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
                value={signup.password}
                onChange={handleChange}
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Button type='submit'>Signup</Button>
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
