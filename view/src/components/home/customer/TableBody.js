const TableBody = ({ images, price, quantity }) => {
  return (
    <tr>
      <td>
        <i
          className='fa fa-times'
          style={{
            marginRight: 10,
            cursor: 'pointer',
          }}
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
          <i className='fa fa-minus-circle'></i>
          {quantity}
          <i className='fa fa-plus-circle'></i>
        </span>
      </td>
      <td>${price * quantity}</td>
    </tr>
  );
};

export default TableBody;
