import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EditProductButton = ({ productId }) => {
  return (
    <Link to={`/product/${productId}/edit`}>
      <Button className='btn btn-warning'>Edit</Button>
    </Link>
  );
};

export default EditProductButton;
