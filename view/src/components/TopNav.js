import { useDispatch, useSelector } from 'react-redux';
import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../features/userSlice';
import Container from 'react-bootstrap/Container';
import '../css/components/TopNav.css';

const TopNav = () => {
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  const isAdmin = user && user.isAdmin;
  const isCustomer = user && !user.isAdmin;
  const hasCart = user.cart.count > 0;

  const handleLogout = e => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <Navbar bg='light' expand='lg' sticky='top'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>Tech Shop</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            {!user && (
              <LinkContainer to='/login'>
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            )}

            {isCustomer && (
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i>
                  {hasCart && (
                    <span className='badge badge-warning' id='cartcount'>
                      {user.cart.count}
                    </span>
                  )}
                </Nav.Link>
              </LinkContainer>
            )}

            {user && (
              <NavDropdown title={user.email} id='basic-nav-dropdown'>
                {isAdmin ? (
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
