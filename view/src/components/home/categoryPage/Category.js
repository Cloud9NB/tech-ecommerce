import { Col, Container, Row } from 'react-bootstrap';
import ProductPreview from '../ProductPreview';

const Category = ({ productsSearch }) => {
  const something = productsSearch.map((product, index) => (
    <ProductPreview {...product} key={index} />
  ));

  return (
    <Container>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>{something}</Col>
      </Row>
    </Container>
  );
};

export default Category;
