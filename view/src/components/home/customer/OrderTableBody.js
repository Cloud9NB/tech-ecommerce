import { Badge, Button } from 'react-bootstrap';

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
}) => {
  const fullAddress = `${address}, ${city}, ${country}, ${postalCode}`;

  const markShipped = () => {};

  return (
    <tr>
      <td>{_id}</td>

      {isAdmin && (
        <>
          <td>{count}</td>
          <td>{owner.name}</td>
          <td>{fullAddress}</td>
          <td>
            {status === 'Processing' ? (
              <Button size='sm' onClick={markShipped}>
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
