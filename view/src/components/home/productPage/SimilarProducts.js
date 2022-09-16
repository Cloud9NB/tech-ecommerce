import ProductPreview from '../ProductPreview';

const SimilarProducts = ({ similar, productId }) => {
  const filteredProducts = similar.filter(sim => sim._id !== productId);

  const similarProducts = filteredProducts.map((sim, index) => (
    <ProductPreview {...sim} key={index} />
  ));

  return (
    <div className='my-4'>
      <h2>Similar Products</h2>
      <div className='d-flex justify-content-center align-items-center flex-wrap'>
        {similar && similarProducts}
      </div>
    </div>
  );
};

export default SimilarProducts;
