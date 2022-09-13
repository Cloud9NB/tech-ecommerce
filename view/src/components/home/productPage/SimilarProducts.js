import AliceCarousel from 'react-alice-carousel';
import SimilarProduct from './SimilarProduct';

const SimilarProducts = ({ similar }) => {
  let similarProducts = [];

  if (similar) {
    similarProducts = similar.map((sim, index) => {
      return (
        <div className='item' key={index}>
          <SimilarProduct {...sim} />
        </div>
      );
    });
  }

  const responsive = {
    0: { item: 1 },
    568: { item: 2 },
    1024: { item: 3 },
  };
  return (
    <div className='my-4'>
      <h2>Similar Products</h2>
      <div className='d-flex justify-content-center align-items-center flex-wrap'>
        <AliceCarousel
          mouseTracking
          items={similarProducts}
          responsive={responsive}
          controlStrategy='alternate'
        />
      </div>
    </div>
  );
};

export default SimilarProducts;