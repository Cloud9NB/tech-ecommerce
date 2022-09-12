import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EditProduct = ({ product }) => {
  return (
    <Link to={`/product/${product._id}/edit`}>
      <Button size='lg'>Edit Product</Button>
    </Link>
  );
};

export default EditProduct;
