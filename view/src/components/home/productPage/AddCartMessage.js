import { useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import '../../../css/components/home/AddCartMessage.css';

const AddCartMessage = ({ body, setState }) => {
  const [show, setShow] = useState(true);

  const handleOnClose = () => {
    setShow(false);
    setState(prev => ({ ...prev, quantity: 0 }));
  };

  return (
    <ToastContainer position='bottom-right' className='toast__container'>
      <Toast
        bg='info'
        onClose={handleOnClose}
        show={show}
        delay={3000}
        autohide
      >
        <Toast.Header>
          <strong className='me-auto'>Added to cart</strong>
          <small>now</small>
        </Toast.Header>
        <Toast.Body>{body}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default AddCartMessage;
