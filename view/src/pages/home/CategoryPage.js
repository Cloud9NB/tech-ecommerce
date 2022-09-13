import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../../components/home/productPage/Loading';
import Category from '../../components/home/categoryPage/Category';
import '../../css/pages/home/CategoryPage.css';

const CategoryPage = () => {
  const [state, setState] = useState({
    products: [],
    isLoading: false,
    searchTerm: '',
  });

  const { category } = useParams();

  useEffect(() => {
    setState(prev => ({ ...prev, isLoading: true }));
    axios
      .get(`/products/category/${category}`)
      .then(({ data }) =>
        setState(prev => ({ ...prev, isLoading: false, products: data }))
      )
      .catch(err => {
        setState(prev => ({ ...prev, isLoading: false }));
        console.log(err.message);
      });
  }, [category]);

  if (state.isLoading) {
    <Loading />;
  }

  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  const handleChange = e =>
    setState(prev => ({ ...prev, searchTerm: e.target.value }));

  const productsSearch = state.products.filter(product =>
    product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
  );

  const noProducts = productsSearch.length === 0;

  const products = noProducts ? (
    <h1 className='text-center'>No products to show</h1>
  ) : (
    <Category productsSearch={productsSearch} />
  );

  return (
    <div className='category-page__container'>
      <div
        className={`pt-3 ${category}-banner__container category-banner__container`}
      >
        <h1 className='text-center'>{categoryName}</h1>
      </div>

      <div className='filters__container d-flex justify-content-center pt-4 pb-4'>
        <input
          type='search'
          name='searchTerm'
          placeholder='Search'
          onChange={handleChange}
        />
      </div>

      {products}
    </div>
  );
};

export default CategoryPage;
