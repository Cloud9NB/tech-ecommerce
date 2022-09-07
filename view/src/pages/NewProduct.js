import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateProductMutation } from '../services/appApi';
import '../css/pages/NewProduct.css';
import NewProductImages from '../components/NewProductImages';

const NewProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    images: [],
  });

  const navigate = useNavigate();

  const [createProduct, { error, isError, isLoading, isSuccess }] =
    useCreateProductMutation();

  const handleChange = e => {
    setProduct(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!product.images.length) {
      return alert('Please fill out all fields');
    }

    createProduct(product).then(res => {
      if (res.data.length > 0) {
        setTimeout(() => navigate('/'), 2500);
      }
    });
  };

  const showWidget = () => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: process.env.REACT_APP_CLOUDNAME,
        uploadPreset: process.env.REACT_APP_UPLOADPRESET,
      },
      (error, result) => {
        if (!error && result.event === 'success') {
          const newImages = [
            ...product.images,
            { url: result.info.url, public_id: result.info.public_id },
          ];

          setProduct(prev => ({
            ...prev,
            images: newImages,
          }));
        }
      }
    );

    widget.open();
  };

  const uploadedImages = product.images.map((image, index) => (
    <NewProductImages
      key={index}
      image={image}
      setProduct={setProduct}
      images={product.images}
    />
  ));

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

            <Form.Group className='mb-3'>
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type='text'
                name='name'
                placeholder='Enter Product Name'
                value={product.name}
                onChange={handleChange}
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                className='new-product__form--description'
                as='textarea'
                name='description'
                placeholder='Product Description'
                value={product.description}
                onChange={handleChange}
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type='number'
                name='price'
                placeholder='Product Price'
                value={product.price}
                onChange={handleChange}
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Category</Form.Label>
              <Form.Select onChange={handleChange} name='category' required>
                <option hidden>-- Please Select Once --</option>
                <option disabled defaultChecked>
                  -- Please Select Once --
                </option>
                <option value='technology'>Technology</option>
                <option value='consoles'>Consoles</option>
                <option value='phones'>Phones</option>
                <option value='laptops'>Laptops</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className='mb-3'>
              <Button type='button' onClick={showWidget}>
                Upload Images
              </Button>
              <div className='images-preview-container'>{uploadedImages}</div>
            </Form.Group>

            <Form.Group>
              <Button type='submit' disabled={isLoading || isSuccess}>
                Create Product
              </Button>
            </Form.Group>
          </Form>
        </Col>

        <Col md={6} className='new-product__image--container'></Col>
      </Row>
    </Container>
  );
};

export default NewProduct;
