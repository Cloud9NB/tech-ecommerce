import { useState } from 'react';
import { Alert, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useUpdateProductMutation } from '../../services/appApi';
import { useSelector } from 'react-redux';
import ProductForm from '../../components/admin/createProduct/ProductForm';

const EditProductPage = () => {
  const { id } = useParams();
  const products = useSelector(({ products }) => products);
  const product = products.find(({ _id }) => _id === id);

  const [state, setState] = useState({
    _id: id,
    name: product.name,
    description: product.description,
    price: product.price,
    category: product.category,
    images: product.images,
  });

  const [updateProduct, { error, isError, isLoading, isSuccess }] =
    useUpdateProductMutation();

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (!state.images.length) {
      return alert('Please fill out all fields');
    }

    updateProduct(state)
      .then(res => {
        if (res.data.length > 0) {
          setTimeout(() => navigate('/dashboard'), 1600);
        }
      })
      .catch(err => console.log(err.message));
  };

  return (
    <Container>
      <Row>
        <Col md={6} className='new-product__form--container'>
          <h1 className='m-4'>Edit {product.name}</h1>
          {isSuccess && (
            <Alert variant='success'>Product edited with success</Alert>
          )}
          {isError && <Alert variant='danger'>{error.data}</Alert>}
          <Form onSubmit={handleSubmit} className='login__form'>
            <ProductForm
              setState={setState}
              images={state.images}
              isSuccess={isSuccess}
              name={state.name}
              description={state.description}
              price={state.price}
              isLoading={isLoading}
              category={state.category}
              textAction='Edit'
            />
          </Form>
        </Col>

        <Col md={6} className='new-product__image--container'></Col>
      </Row>
    </Container>
  );
};

export default EditProductPage;
