import '../../../css/components/NewProductImages.css';

const NewProductImages = ({ image, images, setProduct }) => {
  const handleRemoveImage = imgObj => {
    const updatedImages = [
      ...images.filter(image => image.public_id !== imgObj.public_id),
    ];

    setProduct(prev => ({ ...prev, images: updatedImages }));
  };

  return (
    <div className='image-preview'>
      <img src={image.url} alt='product' />
      <i
        className='fa fa-times-circle'
        onClick={() => handleRemoveImage(image)}
      ></i>
    </div>
  );
};

export default NewProductImages;
