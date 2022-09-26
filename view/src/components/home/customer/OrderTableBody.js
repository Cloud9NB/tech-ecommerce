import { Badge, Button } from 'react-bootstrap';
import { useUpdateStatusMutation } from '../../../../src/services/appApi';

const OrderTableBody = ({
  _id,
  status,
  date,
  total,
  isAdmin,
  isCustomer,
  address,
  city,
  country,
  owner,
  postalCode,
  count,
  setState,
}) => {
  const fullAddress = `${address}, ${city}, ${country}, ${postalCode}`;

  const showOrder = () => {
    // (products)
  };

  const [updateStatus, { isLoading }] = useUpdateStatusMutation();

  const markShipped = () => {
    updateStatus({ _id, ownerId: owner._id })
      .then(({ data }) => setState(prev => ({ ...prev, orders: data })))
      .catch(e => console.log(e));
  };
  return (
    <tr>
      <td>{_id}</td>

      {isAdmin && (
        <>
          <td>{count}</td>
          <td>{owner.name}</td>
          <td>{fullAddress}</td>
          <td>
            <span onClick={showOrder}>
              <i className='fa fa-eye'></i>
            </span>
          </td>
          <td>
            {status === 'Processing' ? (
              <Button size='sm' onClick={markShipped} disabled={isLoading}>
                Mark as shipped
              </Button>
            ) : (
              <Badge bg='success'>Shipped</Badge>
            )}
          </td>
        </>
      )}

      {isCustomer && (
        <td>
          <Badge
            bg={`${status === 'Processing' ? 'warning' : 'success'}`}
            text='white'
          >
            {status}
          </Badge>
        </td>
      )}

      <td>{date}</td>
      <td>${total}</td>
    </tr>
  );
};

export default OrderTableBody;
