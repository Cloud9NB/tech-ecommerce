import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Loading from '../productPage/Loading';
import OrderTableBody from './OrderTableBody';

const OrderTable = ({ orders, loading, setState }) => {
  const user = useSelector(({ user }) => user);
  const isAdmin = user && user.isAdmin;
  const isCustomer = user && !user.isAdmin;

  const orderTableBody = orders.map(order => (
    <OrderTableBody
      key={order._id}
      {...order}
      isAdmin={isAdmin}
      isCustomer={isCustomer}
      setState={setState}
    />
  ));

  if (loading) return <Loading />;

  if (orders.length === 0)
    return <h1 className='text-center pt-3'>No orders yet</h1>;

  return (
    <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>Order ID</th>

          {isAdmin && (
            <>
              <th>Quantity</th>
              <th>Client Name</th>
              <th>Address</th>
              <th>View Order</th>
            </>
          )}

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
