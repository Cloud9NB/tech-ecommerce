import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../css/components/home/HomeCategories.css';

const HomeCategories = ({ name, img }) => {
  return (
    <Link
      to={`/category/${name.toLocaleLowerCase()}`}
      className='home-category-link__container'
    >
      <Card
        className='category__tile'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`,
        }}
      >
        {name}
      </Card>
    </Link>
  );
};

export default HomeCategories;
