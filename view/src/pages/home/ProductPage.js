import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import AliceCarousel from 'react-alice-carousel';
import axios from 'axios';
import Loading from '../../components/home/Loading';
import '../../css/pages/home/ProductPage.css';

const ProductPage = () => {
  const [state, setState] = useState({
    product: null,
    similar: null,
  });

  const { id } = useParams();

  useEffect(() => {
    axios.get(`/products/${id}`).then(({ data }) =>
      setState(prev => ({
        ...prev,
        product: data.product,
        similar: data.similar,
      }))
    );
  }, [id]);

  if (!state.product) {
    return <Loading />;
  }

  const handleDragStart = e => {
    e.preventDefault();
  };

  const images = state.product.images.map(({ url }) => (
    <img
      className='product__carousel--image'
      src={url}
      onDragStart={handleDragStart}
      alt='product carousel'
    />
  ));

  return (
    <Container className='pt-4 product-page__container'>
      <Row>
        <Col lg={6}>
          <AliceCarousel
            mouseTracking
            items={images}
            controlStrategy='alternate'
          />
        </Col>
        <Col lg={6} className='pt-4'>
          <h1>{state.product.name}</h1>
          <p>
            <Badge bg='primary'>{state.product.category}</Badge>
          </p>
          <p className='product__price'>{state.product.price}</p>
          <p style={{ textAlign: 'justify' }} className='py-3'>
            <strong>Description:</strong> {state.product.description}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
