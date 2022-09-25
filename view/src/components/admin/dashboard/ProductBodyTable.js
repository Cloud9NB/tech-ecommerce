import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import EditProductButton from '../../home/productPage/EditProductButton';
import { useDeleteProductMutation } from '../../../services/appApi';

const ProductBodyTable = ({ images, _id, name, price }) => {
  const user = useSelector(({ user }) => user);

  const [deleteProduct, { isLoading }] = useDeleteProductMutation();

  const handleDeleteProduct = e => {
    if (window.confirm(`Are you sure you want to delete ${name}?`))
      deleteProduct({ productId: _id, userId: user._id });
  };

  return (
    <tr>
      <td>
        <img
          src={images[0].url}
          alt='product'
          style={{
            width: 100,
            height: 100,
            objectFit: 'cover',
          }}
          className='dashboard-product__preview'
        />
      </td>
      <td>{_id}</td>
      <td>{name}</td>
      <td>${price}</td>
      <td>
        <Button onClick={handleDeleteProduct} disabled={isLoading}>
          Delete
        </Button>
        <EditProductButton productId={_id} />
      </td>
    </tr>
  );
};

export default ProductBodyTable;
