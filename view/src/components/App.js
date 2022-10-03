import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { addNotification } from '../features/userSlice';
import NewProduct from '../pages/admin/createProduct/NewProduct';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import TopNav from './TopNav';
import ProductPage from '../pages/home/ProductPage';
import CategoryPage from '../pages/home/CategoryPage';
import NotFound from '../pages/404';
import CartPage from '../pages/customer/CartPage';
import OrdersPage from '../pages/customer/OrdersPage';
import AdminDashboard from '../pages/admin/AdminDashboard';
import EditProductPage from '../pages/admin/EditProductPage';
import '../css/App.css';

const App = () => {
  const user = useSelector(({ user }) => user);
  const isCustomer = user && !user?.isAdmin;
  const isAdmin = user && user?.isAdmin;
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = io('/');
    socket.off('notification').on('notification', (msgObj, user_id) => {
      if (user_id === user?._id) {
        dispatch(addNotification(msgObj));
      }
    });

    socket.off('new-order').on('new-order', msgObj => {
      if (isAdmin) {
        dispatch(addNotification(msgObj));
      }
    });
  }, [dispatch, isAdmin, user?._id]);

  return (
    <div>
      <BrowserRouter>
        <TopNav />
        <Routes>
          <Route index element={<Home />} />
          <Route exact path={'/product/:id'} element={<ProductPage />} />
          <Route exact path='/category/:category' element={<CategoryPage />} />

          {!user && (
            <>
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/signup' element={<Signup />} />
            </>
          )}

          {isCustomer && (
            <>
              <Route exact path='/cart' element={<CartPage />} />
              <Route exact path='/orders' element={<OrdersPage />} />
            </>
          )}

          {isAdmin && (
            <>
              <Route exact path='/new-product' element={<NewProduct />} />
              <Route exact path='/dashboard' element={<AdminDashboard />} />
              <Route
                exact
                path='/product/:id/edit'
                element={<EditProductPage />}
              />
            </>
          )}

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
