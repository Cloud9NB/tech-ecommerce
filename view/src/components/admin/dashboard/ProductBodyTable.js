import { useNavigate } from 'react-router-dom';
import EditProductButton from '../../admin/EditProductButton';
import DeleteProductButton from '../DeleteProductButton';

const ProductBodyTable = ({ images, _id, name, price }) => {
  const navigate = useNavigate();

  const goToProductPage = () => navigate(`/product/${_id}`);

  return (
    <tr>
      <td>
        <img
          onClick={goToProductPage}
          src={images[0].url}
          alt='product'
          style={{
            width: 100,
            height: 100,
            objectFit: 'cover',
            cursor: 'pointer',
          }}
          className='dashboard-product__preview'
        />
      </td>
      <td>{_id}</td>
      <td>{name}</td>
      <td>${price}</td>
      <td>
        <DeleteProductButton productId={_id} productName={name} />
        <EditProductButton productId={_id} />
      </td>
    </tr>
  );
};

export default ProductBodyTable;
