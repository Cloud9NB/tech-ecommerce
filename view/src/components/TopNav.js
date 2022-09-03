import Container from 'react-bootstrap/Container';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../css/TopNav.css';

const TopNav = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='/'>Tech Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link href='/login'>Login</Nav.Link>
            {/* <Nav.Link href='#link'>Link</Nav.Link> */}
            <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
