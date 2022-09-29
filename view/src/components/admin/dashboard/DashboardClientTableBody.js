import React from 'react';

const DashboardClientTableBody = ({ _id, name, email, ...rest }) => {
  console.log(rest);
  return (
    <tr>
      <td>{_id}</td>
      <td>{name}</td>
      <td>{email}</td>
    </tr>
  );
};

export default DashboardClientTableBody;
