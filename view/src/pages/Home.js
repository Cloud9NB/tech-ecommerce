import { Link } from 'react-router-dom';
import HomeCategories from '../components/home/HomeCategories';
import '../css/pages/Home.css';

const Home = () => {
  const categories = [
    {
      id: 1,
      name: 'consoles',
      img: 'https://gmedia.playstation.com/is/image/SIEPDC/playstation-5-horizontal-product-shot-01-ps5-en-29sep21?$native--t$',
    },
    {
      id: 2,
      name: 'phones',
      img: 'https://www.powerplanetonline.com/cdnassets/iphone_13_pro_max_verde_alpino_01_l.jpg',
    },
    {
      id: 3,
      name: 'laptops',
      img: 'https://techcrunch.com/wp-content/uploads/2022/07/CMC_1580.jpg',
    },
  ];

  const allCategories = categories.map(({ id, name, img }) => (
    <HomeCategories key={id} name={name} img={img} />
  ));

  return (
    <div>
      <img src='/homeBanner.png' alt='home banner' className='home__banner' />

      <div className='featured--products__container container mt-4'>
        <h2>Featured Products</h2>
        {/* Featured Products from backend */}

        <div>
          <Link to='/category/all' className='seeMore'>
            See more {'>>'}
          </Link>
        </div>
      </div>

      <div className='sale__banner--container'>
        <img src='/saleBanner.png' alt='sale banner' />
      </div>

      <div className='container mt-4'>
        <h2>Categories</h2>
        <div className='recent__products--container'>{allCategories}</div>
      </div>
    </div>
  );
};

export default Home;
