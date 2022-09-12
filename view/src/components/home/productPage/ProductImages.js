import React from 'react';
import { Col } from 'react-bootstrap';
import AliceCarousel from 'react-alice-carousel';

const ProductImages = ({ product }) => {
  const handleDragStart = e => {
    e.preventDefault();
  };

  const images = product.images.map(({ url }) => (
    <img
      className='product__carousel--image'
      src={url}
      onDragStart={handleDragStart}
      alt='product carousel'
    />
  ));

  return (
    <Col lg={6}>
      <AliceCarousel mouseTracking items={images} controlStrategy='alternate' />
    </Col>
  );
};

export default ProductImages;
