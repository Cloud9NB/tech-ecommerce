import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';
import Loading from '../../components/home/productPage/Loading';
import OrderTableBody from '../../components/home/customer/OrderTableBody';

const OrdersPage = () => {
  const user = useSelector(({ user }) => user);
  const [state, setState] = useState({
    orders: [],
    loading: false,
    orderToShow: [],
    show: false,
  });

  useEffect(() => {
    setState(prev => ({ ...prev, loading: true }));
    axios
      .get(`/users/${user._id}/orders`)
      .then(({ data }) =>
        setState(prev => ({ ...prev, loading: false, orders: data }))
      )
      .catch(e => {
        setState(prev => ({ ...prev, loading: false }));
        console.log(e);
      });
  }, [user._id]);

  if (state.loading) return <Loading />;

  if (state.orders.length === 0)
    return <h1 className='text-center pt-3'>No orders yet</h1>;

  const orderTableBody = state.orders.map(order => (
    <OrderTableBody key={order._id} {...order} />
  ));

  return (
    <Container>
      <h1 className='text-center'>Your orders</h1>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Status</th>
            <th>Date</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>{orderTableBody}</tbody>
      </Table>
    </Container>
  );
};

export default OrdersPage;
