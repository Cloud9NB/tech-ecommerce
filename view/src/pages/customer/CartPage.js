import { Alert, Col, Container, Row, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import TableBody from '../../components/home/customer/TableBody';
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

  const tableBody = cart.map(item => (
    <TableBody
      key={item._id}
      {...item}
      quantity={user.cart[item._id]}
      user={user}
    />
  ));

  const pst = Math.round(user.cart.total * 0.07 * 100) / 100;
  const gst = Math.round(user.cart.total * 0.05 * 100) / 100;
  const total = Number((user.cart.total + pst + gst).toFixed(2));

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

                <tbody>{tableBody}</tbody>
              </Table>
              <div>
                <div>PST ${pst}</div>
                <div>GST ${gst}</div>
                <h3 className='h4 pt-4'>Total: ${total}</h3>
              </div>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
