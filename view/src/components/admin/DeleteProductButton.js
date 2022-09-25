import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDeleteProductMutation } from '../../services/appApi';

const DeleteProductButton = ({ productName, productId }) => {
  const user = useSelector(({ user }) => user);
  const [deleteProduct, { isLoading }] = useDeleteProductMutation();

  const handleDeleteProduct = e => {
    if (window.confirm(`Are you sure you want to delete ${productName}?`))
      deleteProduct({ productId, userId: user._id });
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
