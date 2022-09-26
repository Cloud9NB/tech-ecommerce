import {
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContainer,
  TabContent,
  TabPane,
} from 'react-bootstrap';
import DashboardOrders from '../../components/admin/dashboard/DashboardOrders';
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
            <TabContent>
              <TabPane eventKey='products'>
                <DashboardProducts />
              </TabPane>
              <TabPane eventKey='orders'>
                <DashboardOrders />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </TabContainer>
    </Container>
  );
};

export default AdminDashboard;
