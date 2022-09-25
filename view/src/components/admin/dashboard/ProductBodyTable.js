import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductBodyTable = ({ images, _id, name, price }) => {
  const handleDeleteProduct = e => {};

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
        <Button onClick={handleDeleteProduct}>Delete</Button>
        <Link to={`/product/${_id}/edit`} className='btn btn-warning'>
          Edit
        </Link>
      </td>
    </tr>
  );
};

export default ProductBodyTable;
