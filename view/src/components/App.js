import '../css/App.css';
import TopNav from './TopNav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <TopNav />
        <Routes>
          <Route index element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
