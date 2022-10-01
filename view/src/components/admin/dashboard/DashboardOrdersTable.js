import { Badge, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useUpdateStatusMutation } from '../../../services/appApi';
import ViewOrderModal from './ViewOrderModal';

const DashboardOrdersTable = ({
  address,
  city,
  country,
  postalCode,
  _id,
  owner,
  setState,
  count,
  status,
  date,
  total,
  products: ordersProducts,
  ...rest
}) => {
  const fullAddress = `${address}, ${city}, ${country}, ${postalCode}`;
  const products = useSelector(({ products }) => products);
  const [updateStatus, { isLoading }] = useUpdateStatusMutation();

  const showOrder = productsObj => {
    let productsByOrderId = products.filter(
      product => productsObj[product._id]
    );

    const productsToShow = productsByOrderId.map(product => {
      const productCopy = { ...product };
      productCopy.count = productsObj[product._id];
      delete productCopy.description;

      return productCopy;
    });

    setState(prev => ({
      ...prev,
      show: true,
      orderToShow: productsToShow,
    }));
  };

  const markShipped = () => {
    updateStatus({ _id, ownerId: owner?._id })
      .then(({ data }) => setState(prev => ({ ...prev, orders: data })))
      .catch(e => console.log(e));
  };

  const isProcessing =
    status === 'Processing' ? (
      <Button size='sm' onClick={markShipped} disabled={isLoading}>
        Mark as shipped
      </Button>
    ) : (
      <Badge bg='success'>Shipped</Badge>
    );

  return (
    <tr>
      <td>{_id}</td>
      <td>{count}</td>
      <td>{owner?.name}</td>
      <td>{fullAddress}</td>

      <td>
        <span
          onClick={() => showOrder(ordersProducts)}
          style={{ cursor: 'pointer' }}
        >
          <i className='fa fa-eye'></i>
        </span>
      </td>

      <td>{isProcessing}</td>
      <td>{date}</td>
      <td>${total}</td>

      <ViewOrderModal
        setState={setState}
        show={rest.show}
        orderToShow={rest.orderToShow}
      />
    </tr>
  );
};

export default DashboardOrdersTable;
