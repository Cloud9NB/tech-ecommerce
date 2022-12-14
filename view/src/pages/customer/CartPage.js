import { Alert, Col, Container, Row, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../../components/home/customer/CheckoutForm';
import CartTable from '../../components/home/customer/CartTable';
import '../../css/pages/customer/CartPage.css';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const CartPage = () => {
  const { user, products } = useSelector(({ user, products }) => ({
    user,
    products,
  }));
  const userCartObj = user.cart;
  let cart = products.filter(product => userCartObj[product._id] != null);
  const emptyCart = cart.length <= 0;

  const isEmptyCart = emptyCart ? (
    <Alert variant='info'>
      Shopping cart is empty. Add products to your cart.
    </Alert>
  ) : (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );

  const cartTable = cart.map(item => (
    <CartTable
      key={item._id}
      {...item}
      quantity={user.cart[item._id]}
      user={user}
    />
  ));

  const pst = ((user.cart.total / 1.12) * 0.07).toFixed(2);
  const gst = ((user.cart.total / 1.12) * 0.05).toFixed(2);

  return (
    <Container className='cart__container'>
      <Row>
        <Col>
          <h1 className='pt-2 h3'>Shopping Cart</h1>
          {isEmptyCart}
        </Col>
        <Col>
          {!emptyCart && (
            <>
              <Table responsive='sm'>
                <thead>
                  <tr>
                    <th>&nbsp;</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>SubTotal</th>
                  </tr>
                </thead>

                <tbody>{cartTable}</tbody>
              </Table>
              <div>
                <div>PST ${pst}</div>
                <div>GST ${gst}</div>
                <h3 className='h4 pt-4'>Total: ${user.cart.total}</h3>
              </div>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
