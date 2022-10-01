import { useDispatch, useSelector } from 'react-redux';
import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { logout, resetNotifications } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import NavNotifications from './NavNotifications';
import '../css/components/TopNav.css';

const TopNav = () => {
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  const isAdmin = user && user.isAdmin;
  const isCustomer = user && !user.isAdmin;
  const hasCart = user?.cart.count > 0;

  const navigate = useNavigate();

  const handleLogout = e => {
    e.preventDefault();
    dispatch(logout());
    navigate('/');
  };

  const navNotifications = user?.notifications?.map((notification, index) => (
    <NavNotifications key={index} {...notification} />
  ));

  const bellRef = useRef(null);
  const notificationRef = useRef(null);
  const [bellPos, setBellPos] = useState({
    top: null,
    left: null,
  });

  const unreadNotifications = user?.notifications?.reduce((prev, current) => {
    if (current.status === 'unread') return prev + 1;
    return prev;
  }, 0);

  const handleToggleNotifications = () => {
    const position = bellRef.current.getBoundingClientRect();

    setBellPos(position);
    notificationRef.current.style.display =
      notificationRef.current.style.display === 'block' ? 'none' : 'block';

    dispatch(resetNotifications());

    if (unreadNotifications > 0) {
      axios.post(`/users/${user._id}/updateNotifications`);
    }
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
              <>
                <Nav.Link
                  style={{ position: 'relative' }}
                  onClick={handleToggleNotifications}
                >
                  <i
                    className='fas fa-bell'
                    ref={bellRef}
                    data-count={unreadNotifications || null}
                  ></i>
                </Nav.Link>
                <NavDropdown title={user.email} id='basic-nav-dropdown'>
                  {isAdmin ? (
                    <>
                      <LinkContainer to='/dashboard'>
                        <NavDropdown.Item>Dashboard</NavDropdown.Item>
                      </LinkContainer>

                      <LinkContainer to='/new-product'>
                        <NavDropdown.Item>Create Product</NavDropdown.Item>
                      </LinkContainer>
                    </>
                  ) : (
                    <>
                      <LinkContainer to='/cart'>
                        <NavDropdown.Item>Cart</NavDropdown.Item>
                      </LinkContainer>

                      <LinkContainer to='/orders'>
                        <NavDropdown.Item>My Orders</NavDropdown.Item>
                      </LinkContainer>
                    </>
                  )}

                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Button
                      variant='danger'
                      className='logout-btn'
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>

      <div
        className='notifications__container'
        ref={notificationRef}
        style={{
          position: 'absolute',
          top: bellPos.top + 30,
          left: bellPos.left,
          display: 'none',
        }}
      >
        {user?.notifications?.length > 0 ? (
          navNotifications
        ) : (
          <p>No Notifications</p>
        )}
      </div>
    </Navbar>
  );
};

export default TopNav;
