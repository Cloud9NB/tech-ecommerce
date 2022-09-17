import AliceCarousel from 'react-alice-carousel';
import ProductPreview from '../ProductPreview';

const SimilarProducts = ({ similar, productId }) => {
  const filteredProducts = similar.filter(sim => sim._id !== productId);

  const similarProducts = filteredProducts.map((sim, index) => (
    <ProductPreview {...sim} key={index} />
  ));

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <div className='my-4'>
      <h2>Similar Products</h2>
      <div className='d-flex justify-content-center align-items-center flex-wrap'>
        {similar && (
          <AliceCarousel
            mouseTracking
            items={similarProducts}
            responsive={responsive}
            controlsStrategy='alternate'
          />
        )}
        {/* {similar && similarProducts} */}
      </div>
    </div>
  );
};

export default SimilarProducts;
