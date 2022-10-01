import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Loading from '../../home/productPage/Loading';
import DashboardClientTableBody from './DashboardClientTableBody';

const DashboardClients = () => {
  const [state, setState] = useState({
    users: [],
    loading: false,
  });

  useEffect(() => {
    setState(prev => ({ ...prev, loading: true }));
    axios
      .get('/users')
      .then(({ data }) =>
        setState(prev => ({ ...prev, loading: false, users: data }))
      )
      .catch(err => {
        setState(prev => ({ ...prev, loading: false }));
        console.log(err);
      });
  }, []);

  if (state.loading) return <Loading />;
  if (state.users.length === 0)
    return <h1 className='text-center pt-3'>No clients yet</h1>;

  const orderTableBody = state.users.map(user => (
    <DashboardClientTableBody key={user._id} {...user} />
  ));

  return (
    <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>Client ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>{orderTableBody}</tbody>
    </Table>
  );
};

export default DashboardClients;
