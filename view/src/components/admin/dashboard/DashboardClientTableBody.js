import React from 'react';

const DashboardClientTableBody = ({ _id, name, email }) => {
  return (
    <tr>
      <td>{_id}</td>
      <td>{name}</td>
      <td>{email}</td>
    </tr>
  );
};

export default DashboardClientTableBody;
