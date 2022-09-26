import { useEffect, useState } from 'react';
import axios from 'axios';
import OrderTable from '../../home/customer/OrderTable';

const DashboardOrders = () => {
  const [state, setState] = useState({
    orders: [],
    loading: false,
    orderToShow: [],
    show: false,
  });

  useEffect(() => {
    setState(prev => ({ ...prev, loading: true }));
    axios
      .get('/orders')
      .then(({ data }) =>
        setState(prev => ({ ...prev, loading: false, orders: data }))
      )
      .catch(e => {
        console.log(e);
        setState(prev => ({ ...prev, loading: false }));
      });
  }, []);

  return (
    <OrderTable
      orders={state.orders}
      loading={state.loading}
      setState={setState}
    />
  );
};

export default DashboardOrders;
