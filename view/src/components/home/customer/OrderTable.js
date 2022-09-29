import { Table } from 'react-bootstrap';
import Loading from '../productPage/Loading';
import OrderTableBody from './OrderTableBody';

const OrderTable = ({ orders, loading }) => {
  const orderTableBody = orders.map(order => (
    <OrderTableBody key={order._id} {...order} />
  ));

  if (loading) return <Loading />;

  if (orders.length === 0)
    return <h1 className='text-center pt-3'>No orders yet</h1>;

  return (
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
  );
};

export default OrderTable;
