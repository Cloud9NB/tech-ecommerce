import { Link } from 'react-router-dom';
import '../../css/components/HomeCategories.css';

const HomeCategories = ({ name, img }) => {
  return (
    <Link to={`/category/${name.toLocaleLowerCase()}`}>
      <div
        className='category__tile'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`,
        }}
      >
        {name}
      </div>
    </Link>
  );
};

export default HomeCategories;
