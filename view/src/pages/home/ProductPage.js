import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Badge,
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  Row,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../../components/home/productPage/Loading';
import SimilarProducts from '../../components/home/productPage/SimilarProducts';
import ProductImages from '../../components/home/productPage/ProductImages';
import '../../css/pages/home/ProductPage.css';
import 'react-alice-carousel/lib/alice-carousel.css';

const ProductPage = () => {
  const [state, setState] = useState({
    product: null,
    similar: null,
  });
  const user = useSelector(({ user }) => user);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then(({ data }) =>
        setState(prev => ({
          ...prev,
          product: data.product,
          similar: data.similar,
        }))
      )
      .catch(err => console.log(err));
  }, [id]);

  if (!state.product) {
    return <Loading />;
  }

  const customer = user && !user.isAdmin;
  const admin = user && user.isAdmin;

  return (
    <Container className='pt-4 product-page__container'>
      <Row>
        <ProductImages product={state.product} />
        <Col lg={6} className='pt-4'>
          <h1>{state.product.name}</h1>
          <p>
            <Badge bg='primary'>{state.product.category}</Badge>
          </p>
          <p className='product__price'>{state.product.price}</p>
          <p style={{ textAlign: 'justify' }} className='py-3'>
            <strong>Description:</strong> {state.product.description}
          </p>
          {customer && (
            <ButtonGroup style={{ width: '90%' }}>
              <Form.Select
                size='lg'
                style={{ width: '40%', borderRadius: '0' }}
              >
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
              </Form.Select>
              <Button size='lg'>Add To Cart</Button>
            </ButtonGroup>
          )}

          {admin && (
            <Link to={`/product/${state.product._id}/edit`}>
              <Button size='lg'>Edit Product</Button>
            </Link>
          )}
        </Col>
      </Row>

      <SimilarProducts product={state.product} similar={state.similar} />
    </Container>
  );
};

export default ProductPage;
