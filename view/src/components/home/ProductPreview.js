import { Badge, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../../css/components/home/ProductPreview.css';

const ProductPreview = ({ _id, name, category, images }) => {
  return (
    <LinkContainer to={`/product/${_id}`} className='product-preview__link'>
      <Card className='product-preview__card'>
        <Card.Img
          variant='top'
          className='product-preview__img'
          src={images[0].url}
        />
        <Card.Body className='text-center'>
          <Card.Title>{name}</Card.Title>
          <Badge bg='warning' text='dark'>
            {category}
          </Badge>
        </Card.Body>
      </Card>
    </LinkContainer>
  );
};

export default ProductPreview;
