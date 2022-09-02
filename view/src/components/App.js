import '../css/App.css';
import TopNav from './TopNav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <TopNav />
        <Routes>
          <Route index element={<Home />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
