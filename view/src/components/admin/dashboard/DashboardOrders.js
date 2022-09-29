import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import DashboardOrdersTable from './DashboardOrdersTable';

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

  const orderTableBody = state.orders.map(order => (
    <DashboardOrdersTable
      key={order._id}
      {...order}
      setState={setState}
      show={state.show}
      orderToShow={state.orderToShow}
    />
  ));

  return (
    <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Quantity</th>
          <th>Client Name</th>
          <th>Address</th>
          <th>View Order</th>
          <th>Status</th>
          <th>Date</th>
          <th>Total</th>
        </tr>
      </thead>

      <tbody>{orderTableBody}</tbody>
    </Table>
  );
};

export default DashboardOrders;
