import {
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContainer,
  TabContent,
} from 'react-bootstrap';
import DashboardProducts from '../../components/admin/dashboard/DashboardProducts';

const AdminDashboard = () => {
  return (
    <Container>
      <TabContainer defaultActiveKey='products'>
        <Row>
          <Col sm={3}>
            <Nav variant='pills' className='flex-column'>
              <NavItem>
                <NavLink eventKey='products'>Products</NavLink>
              </NavItem>
              <NavItem>
                <NavLink eventKey='orders'>Orders</NavLink>
              </NavItem>
              <NavItem>
                <NavLink eventKey='clients'>Clients</NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col sm={9}>
            <TabContent eventKey='products'>
              <DashboardProducts />
            </TabContent>
          </Col>
        </Row>
      </TabContainer>
    </Container>
  );
};

export default AdminDashboard;
