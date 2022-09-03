import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    setLogin(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Container>
      <Row>
        <Col md={6} className='login__form'>
          <Form>
            <h1>Login to your account</h1>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                name='email'
                placeholder='Enter Email'
                value={login.email}
                onChange={handleChange}
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                name='password'
                placeholder='Enter Password'
                value={login.password}
                onChange={handleChange}
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Button type='submit' onClick={handleSubmit}>
                Login
              </Button>
            </Form.Group>
            <p>
              Don't have an account? <Link to='/signup'>Create an account</Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
