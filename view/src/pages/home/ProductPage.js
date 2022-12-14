import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  capitalizeCategoryName,
  totalAfterTax,
} from '../../helperFunctions/helperFunctions';
import { useAddToCartMutation } from '../../services/appApi';
import axios from 'axios';
import Loading from '../../components/home/productPage/Loading';
import SimilarProducts from '../../components/home/productPage/SimilarProducts';
import ProductImages from '../../components/home/productPage/ProductImages';
import AddToCart from '../../components/home/productPage/AddToCart';
import EditProductButton from '../../components/admin/EditProductButton';
import AddCartMessage from '../../components/home/productPage/AddCartMessage';
import DeleteProductButton from '../../components/admin/DeleteProductButton';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../css/pages/home/ProductPage.css';

const ProductPage = () => {
  const [state, setState] = useState({
    product: null,
    similar: null,
    quantity: 0,
  });

  const user = useSelector(({ user }) => user);
  const { id } = useParams();
  const [addToCart, { isSuccess, isLoading }] = useAddToCartMutation();

  const handleButton = () => {
    const afterTax = totalAfterTax(state.product.price, state.quantity);

    if (state.quantity > 0) {
      return addToCart({
        userId: user._id,
        productId: id,
        price: afterTax,
        quantity: state.quantity,
      });
    }
    alert('Please choose the amount');
  };

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

  const categoryName = capitalizeCategoryName(state.product.category);
  const isAdmin = user?.isAdmin;
  const isNotLogged = !user ? true : false;

  return (
    <Container className='pt-4 product-page__container'>
      <Row>
        <ProductImages product={state.product} />
        <Col lg={6} className='pt-4'>
          <h1>{state.product.name}</h1>
          <Link to={`/category/${state.product.category}`}>
            <p>
              <Badge bg='primary'>{categoryName}</Badge>
            </p>
          </Link>

          <p className='product__price'>${state.product.price}</p>

          <p style={{ textAlign: 'justify' }} className='py-3'>
            <strong>Description:</strong> {state.product.description}
          </p>

          <AddToCart
            handleButton={handleButton}
            setState={setState}
            isNotLogged={isNotLogged}
            isLoading={isLoading}
          />

          {isAdmin && (
            <>
              <EditProductButton productId={state.product._id} />
              <DeleteProductButton
                productName={state.product.name}
                productId={id}
              />
            </>
          )}

          {isSuccess && (
            <AddCartMessage
              body={`${state.quantity} ${state.product.name} has been added to your cart`}
              setState={setState}
            />
          )}
        </Col>
      </Row>

      <SimilarProducts similar={state.similar} productId={state.product._id} />
    </Container>
  );
};

export default ProductPage;
