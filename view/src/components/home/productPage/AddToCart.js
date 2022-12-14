import { Button, ButtonGroup, Form } from 'react-bootstrap';

const AddToCart = ({ handleButton, setState, isNotLogged, isLoading }) => {
  const handleChange = e =>
    setState(prev => ({ ...prev, quantity: Number(e.target.value) }));

  return (
    <ButtonGroup style={{ width: '90%' }}>
      <Form.Select
        style={{ width: '40%', borderRadius: '0' }}
        onChange={handleChange}
        defaultValue='default'
        disabled={isNotLogged}
      >
        <option value='default' disabled>
          Select amount
        </option>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
      </Form.Select>
      <Button
        size='lg'
        onClick={handleButton}
        disabled={isNotLogged || isLoading}
      >
        Add To Cart
      </Button>
    </ButtonGroup>
  );
};

export default AddToCart;
