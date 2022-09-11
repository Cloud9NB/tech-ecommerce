import { Spinner } from 'react-bootstrap';
import '../../css/components/home/Loading.css';

const Loading = () => {
  return (
    <div className='loading-container'>
      <Spinner animation='grow' />
    </div>
  );
};

export default Loading;
