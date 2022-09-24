import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NewProduct from '../pages/admin/createProduct/NewProduct';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import TopNav from './TopNav';
import ProductPage from '../pages/home/ProductPage';
import CategoryPage from '../pages/home/CategoryPage';
import '../css/App.css';
import NotFound from '../pages/404';
import CartPage from '../pages/customer/CartPage';
import OrdersPage from '../pages/customer/OrdersPage';

const App = () => {
  const user = useSelector(({ user }) => user);
  const isCustomer = user && !user.isAdmin;

  return (
    <div>
      <BrowserRouter>
        <TopNav />
        <Routes>
          <Route index element={<Home />} />
          {!user && (
            <>
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/signup' element={<Signup />} />
            </>
          )}
          <Route exact path={'/product/:id'} element={<ProductPage />} />
          <Route exact path='/new-product' element={<NewProduct />} />
          <Route exact path='/category/:category' element={<CategoryPage />} />

          {isCustomer && (
            <>
              <Route exact path='/cart' element={<CartPage />} />
              <Route exact path='/orders' element={<OrdersPage />} />
            </>
          )}

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
