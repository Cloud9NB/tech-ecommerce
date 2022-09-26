import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import OrderTable from '../../components/home/customer/OrderTable';

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

  return (
    <Container>
      <h1 className='text-center'>Your orders</h1>
      <OrderTable orders={state.orders} loading={state.loading} />
    </Container>
  );
};

export default OrdersPage;
