import { Button, Form } from 'react-bootstrap';
import NewProductImages from './NewProductImages';

const ProductForm = ({
  setState,
  images,
  isSuccess,
  name,
  description,
  price,
  isLoading,
  category,
}) => {
  const handleChange = e => {
    setState(prev => {
      if (e.target.name === 'price') {
        return { ...prev, [e.target.name]: parseFloat(e.target.value) };
      }
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const showWidget = () => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: process.env.REACT_APP_CLOUDNAME,
        uploadPreset: process.env.REACT_APP_UPLOADPRESET,
      },
      (error, result) => {
        if (!error && result.event === 'success') {
          const newImages = [
            ...images,
            { url: result.info.url, public_id: result.info.public_id },
          ];

          setState(prev => ({
            ...prev,
            images: newImages,
          }));
        }
      }
    );

    widget.open();
  };

  const uploadedImages = images.map(image => (
    <NewProductImages
      key={image.public_id}
      image={image}
      setState={setState}
      images={images}
    />
  ));

  return (
    <>
      <Form.Group className='mb-3'>
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          type='text'
          name='name'
          placeholder='Enter Product Name'
          value={name}
          onChange={handleChange}
          required
        ></Form.Control>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Description</Form.Label>
        <Form.Control
          className='new-product__form--description'
          as='textarea'
          name='description'
          placeholder='Product Description'
          value={description}
          onChange={handleChange}
          required
        ></Form.Control>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Price ($)</Form.Label>
        <Form.Control
          type='number'
          name='price'
          min='0'
          step='.01'
          placeholder='Product Price'
          value={price}
          onChange={handleChange}
          required
        ></Form.Control>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Category</Form.Label>
        <Form.Select
          onChange={handleChange}
          name='category'
          required
          value={category}
        >
          <option hidden>-- Please Select Once --</option>
          <option disabled defaultChecked>
            -- Please Select Once --
          </option>
          <option value='technology'>Technology</option>
          <option value='consoles'>Consoles</option>
          <option value='phones'>Phones</option>
          <option value='laptops'>Laptops</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Button type='button' onClick={showWidget}>
          Upload Images
        </Button>
        <div className='images-preview-container'>{uploadedImages}</div>
      </Form.Group>

      <Form.Group>
        <Button type='submit' disabled={isLoading || isSuccess}>
          Create Product
        </Button>
      </Form.Group>
    </>
  );
};

export default ProductForm;
