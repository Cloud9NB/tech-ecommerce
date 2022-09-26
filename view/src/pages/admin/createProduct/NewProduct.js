import { useState } from 'react';
import { Alert, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateProductMutation } from '../../../services/appApi';
import ProductForm from '../../../components/admin/createProduct/ProductForm';
import '../../../css/pages/admin/NewProduct.css';

const NewProduct = () => {
  const [state, setState] = useState({
    name: '',
    description: '',
    price: 0,
    category: '',
    images: [],
  });

  const [createProduct, { error, isError, isLoading, isSuccess }] =
    useCreateProductMutation();

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (!state.images.length) {
      return alert('Please fill out all fields');
    }

    createProduct(state).then(res => {
      if (res.data.length > 0) {
        setTimeout(() => navigate('/'), 1600);
      }
    });
  };

  return (
    <Container>
      <Row>
        <Col md={6} className='new-product__form--container'>
          <Form onSubmit={handleSubmit} className='login__form'>
            <h1 className='m-4'>Create a new product</h1>
            {isSuccess && (
              <Alert variant='success'>Product created with success</Alert>
            )}
            {isError && <Alert variant='danger'>{error.data}</Alert>}
            <ProductForm
              setState={setState}
              images={state.images}
              isSuccess={isSuccess}
              name={state.name}
              description={state.description}
              price={state.price}
              isLoading={isLoading}
              textAction='Create'
            />
          </Form>
        </Col>

        <Col md={6} className='new-product__image--container'></Col>
      </Row>
    </Container>
  );
};

export default NewProduct;
