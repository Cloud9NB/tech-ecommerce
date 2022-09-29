import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const ViewOrderModal = ({ setState, show, orderToShow }) => {
  const handleClose = () => setState(prev => ({ ...prev, show: false }));

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Order details</Modal.Title>
      </Modal.Header>
      {orderToShow.map(order => (
        <div
          key={order._id}
          className='order-details__container d-flex justify-content-around py-2'
        >
          <img
            src={order.images[0].url}
            style={{ maxWidth: 100, height: 100, objectFit: 'cover' }}
            alt=''
          />
          <p>
            <span>{order.count} x </span> {order.name}
          </p>
          <p>Price: ${Number(order.price) * order.count}</p>
        </div>
      ))}
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewOrderModal;
