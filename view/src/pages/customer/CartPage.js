import { Alert, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import '../../css/pages/customer/CartPage.css';

const CartPage = () => {
  const { user, products } = useSelector(({ user, products }) => ({
    user,
    products,
  }));

  const userCartObj = user.cart;
  let cart = products.filter(product => userCartObj[product._id] != null);
  const emptyCart = cart.length === 0;

  const isEmptyCart = emptyCart ? (
    <Alert variant='info'>
      Shopping cart is empty. Add products to your cart.
    </Alert>
  ) : (
    <div>Payment here</div>
  );

  return (
    <Container className='cart__container'>
      <Row>
        <h1 className='pt-2 h3'>Shopping Cart</h1>
        {isEmptyCart}
      </Row>
    </Container>
  );
};

export default CartPage;
