import EditProductButton from '../../home/productPage/EditProductButton';
import DeleteProductButton from '../DeleteProductButton';

const ProductBodyTable = ({ images, _id, name, price }) => {
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
        <DeleteProductButton productId={_id} productName={name} />
        <EditProductButton productId={_id} />
      </td>
    </tr>
  );
};

export default ProductBodyTable;
