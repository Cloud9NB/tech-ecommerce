import { Button, ButtonGroup, Form } from 'react-bootstrap';

const AddToCart = () => {
  return (
    <ButtonGroup style={{ width: '90%' }}>
      <Form.Select size='lg' style={{ width: '40%', borderRadius: '0' }}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
      </Form.Select>
      <Button size='lg'>Add To Cart</Button>
    </ButtonGroup>
  );
};

export default AddToCart;
