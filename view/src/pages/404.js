import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/pages/404.css';

const NotFound = () => {
  return (
    <div className='notfound__container'>
      <h1>404</h1>
      <h3>Oops! Page Not Found</h3>

      <Link to='/'>
        <Button>Go Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
