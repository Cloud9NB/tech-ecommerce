import '../../../css/components/admin/NewProductImages.css';

const NewProductImages = ({ image, images, setState }) => {
  const handleRemoveImage = imgObj => {
    const updatedImages = [
      ...images.filter(image => image.public_id !== imgObj.public_id),
    ];

    setState(prev => ({ ...prev, images: updatedImages }));
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
