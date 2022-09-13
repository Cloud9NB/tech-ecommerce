import { Col, Container, Row } from 'react-bootstrap';
import ProductPreview from '../ProductPreview';

const Category = ({ productsSearch }) => {
  const productsByCategory = productsSearch.map((product, index) => (
    <ProductPreview {...product} key={index} />
  ));

  return (
    <Container>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <div className='d-flex justify-content-center align-items-center flex-wrap'>
            {productsByCategory}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Category;
