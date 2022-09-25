import React from 'react';
import { Badge } from 'react-bootstrap';

const OrderTableBody = ({ _id, status, date, total }) => {
  return (
    <tr>
      <td>{_id}</td>
      <td>
        <Badge
          bg={`${status === 'Processing' ? 'warning' : 'success'}`}
          text='white'
        >
          {status}
        </Badge>
      </td>
      <td>{date}</td>
      <td>${total}</td>
    </tr>
  );
};

export default OrderTableBody;
