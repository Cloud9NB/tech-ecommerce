import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDeleteProductMutation } from '../../services/appApi';

const DeleteProductButton = ({ productName, productId }) => {
  const user = useSelector(({ user }) => user);
  const [deleteProduct, { isLoading }] = useDeleteProductMutation();
  const navigate = useNavigate();

  const handleDeleteProduct = e => {
    if (window.confirm(`Are you sure you want to delete ${productName}?`))
      deleteProduct({ productId, userId: user._id }).then(() =>
        navigate('/dashboard')
      );
  };

  return (
    <Button
      onClick={handleDeleteProduct}
      disabled={isLoading}
      className='btn btn-danger'
    >
      Delete
    </Button>
  );
};

export default DeleteProductButton;
