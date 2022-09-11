import '../css/App.css';
import TopNav from './TopNav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import { useSelector } from 'react-redux';
import NewProduct from '../pages/admin/createProduct/NewProduct';
import ProductPage from '../pages/ProductPage';

const App = () => {
  const user = useSelector(({ user }) => user);

  const products = useSelector(({ products }) => products);
  const productInfoRoute = products.map(({ _id }) => (
    <Route path={`/product/${_id}`} element={<ProductPage />} />
  ));

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
          {productInfoRoute}
          <Route path='/new-product' element={<NewProduct />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
