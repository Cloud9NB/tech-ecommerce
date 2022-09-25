import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ProductBodyTable from './ProductBodyTable';

const DashboardProducts = () => {
  const { user, products } = useSelector(({ user, products }) => ({
    user,
    products,
  }));

  const productBodyTable = products.map(product => (
    <ProductBodyTable key={product._id} {...product} />
  ));

  return (
    <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Product Price</th>
          <th></th>
        </tr>
      </thead>

      <tbody>{productBodyTable}</tbody>
    </Table>
  );
};

export default DashboardProducts;
