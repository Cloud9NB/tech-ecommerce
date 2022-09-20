import {
  useIncreaseCartCountMutation,
  useDecreaseCartCountMutation,
  useDeleteFromCartMutation,
} from '../../../services/appApi';

const TableBody = ({ images, price, quantity, _id: productId, user }) => {
  const [increaseCartCount] = useIncreaseCartCountMutation();
  const [decreaseCartCount] = useDecreaseCartCountMutation();
  const [deleteFromCart] = useDeleteFromCartMutation();

  const deleteClassName = 'fa fa-times';
  const minusClassName = 'fa fa-minus-circle';
  const plusClassName = 'fa fa-plus-circle';

  const handleClick = e => {
    const updatedCart = {
      userId: user._id,
      productId,
      price,
    };

    if (e.target.className === plusClassName) {
      increaseCartCount(updatedCart);
    }

    if (e.target.className === minusClassName) {
      if (quantity <= 1) return deleteFromCart(updatedCart);
      decreaseCartCount(updatedCart);
    }

    if (e.target.className === deleteClassName) {
      deleteFromCart(updatedCart);
    }
  };

  return (
    <tr>
      <td>
        <i
          className={deleteClassName}
          style={{
            marginRight: 10,
            cursor: 'pointer',
          }}
          onClick={handleClick}
        ></i>
      </td>
      <td>
        <img
          src={images[0].url}
          alt='Product'
          style={{
            width: 100,
            height: 100,
            objectFit: 'cover',
          }}
        />
      </td>
      <td>${price}</td>
      <td>
        <span className='quantity'>
          <i className={minusClassName} onClick={handleClick}></i>
          {quantity}
          <i className={plusClassName} onClick={handleClick}></i>
        </span>
      </td>
      <td>${price * quantity}</td>
    </tr>
  );
};

export default TableBody;
