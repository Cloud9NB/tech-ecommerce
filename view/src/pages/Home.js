import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateProducts } from '../features/productSlice';
import axios from 'axios';
import HomeCategories from '../components/home/HomeCategories';
import ProductPreview from '../components/home/ProductPreview';
import '../css/pages/Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(({ products }) => products);
  const lastProducts = products.slice(0, 8);

  useEffect(() => {
    axios.get('/products').then(({ data }) => dispatch(updateProducts(data)));
  }, [dispatch]);

  const categories = [
    {
      id: 1,
      name: 'technology',
      img: 'https://media.istockphoto.com/photos/businessman-using-a-computer-to-document-management-concept-online-picture-id1335050732?b=1&k=20&m=1335050732&s=170667a&w=0&h=ZixERs8xGjy-XF8vYmf60sBwEwE-p3omcoffv8PWMBQ=',
    },
    {
      id: 2,
      name: 'consoles',
      img: 'https://gmedia.playstation.com/is/image/SIEPDC/playstation-5-horizontal-product-shot-01-ps5-en-29sep21?$native--t$',
    },
    {
      id: 3,
      name: 'phones',
      img: 'https://www.powerplanetonline.com/cdnassets/iphone_13_pro_max_verde_alpino_01_l.jpg',
    },
    {
      id: 4,
      name: 'laptops',
      img: 'https://techcrunch.com/wp-content/uploads/2022/07/CMC_1580.jpg',
    },
  ];

  const allCategories = categories.map(({ id, name, img }) => (
    <HomeCategories key={id} name={name} img={img} />
  ));

  const productPreview = lastProducts.map(product => (
    <ProductPreview key={product._id} {...product} />
  ));

  return (
    <div>
      <img src='/homeBanner.png' alt='home banner' className='home__banner' />

      <div className='featured--products__container container mt-4'>
        <h2>Featured Products</h2>
        <div className='product-preview__container'>{productPreview}</div>
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
