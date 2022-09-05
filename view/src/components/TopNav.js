import Container from 'react-bootstrap/Container';
import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import '../css/components/TopNav.css';
import { logout } from '../features/userSlice';

const TopNav = () => {
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const handleLogout = e => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='/'>Tech Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            {!user && <Nav.Link href='/login'>Login</Nav.Link>}

            {user && (
              <NavDropdown title={user.email} id='basic-nav-dropdown'>
                {user.admin ? (
                  <>
                    <NavDropdown.Item href='/dashboard'>
                      Dashboard
                    </NavDropdown.Item>
                    <NavDropdown.Item href='/new-product'>
                      Create Product
                    </NavDropdown.Item>
                  </>
                ) : (
                  <>
                    <NavDropdown.Item href='/cart'>Cart</NavDropdown.Item>
                    <NavDropdown.Item href='/orders'>
                      My Orders
                    </NavDropdown.Item>
                  </>
                )}

                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  <Button
                    variant='danger'
                    className='logout-btn'
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
