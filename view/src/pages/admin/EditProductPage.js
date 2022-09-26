// import { useState } from 'react';
// import { Col, Container, Form, Row } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { useCreateProductMutation } from '../../../services/appApi';
// import ProductForm from '../../../components/admin/createProduct/ProductForm';
// // import '../../../css/pages/admin/NewProduct.css';

// const EditProductPage = () => {
//   const [state, setState] = useState({
//     name: '',
//     description: '',
//     price: 0,
//     category: '',
//     images: [],
//   });

//   // const [createProduct, { error, isError, isLoading, isSuccess }] =
//   //   useCreateProductMutation();

//   const navigate = useNavigate();

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (!state.images.length) {
//       return alert('Please fill out all fields');
//     }

//     // createProduct(state).then(res => {
//     //   if (res.data.length > 0) {
//     //     setTimeout(() => navigate('/'), 1600);
//     //   }
//     // });
//   };

//   return (
//     <Container>
//       <Row>
//         <Col md={6} className='new-product__form--container'>
//           <Form onSubmit={handleSubmit} className='login__form'>
//             <ProductForm
//               setState={setState}
//               images={state.images}
//               isSuccess={isSuccess}
//               isError={isError}
//               error={error}
//               name={state.name}
//               description={state.description}
//               price={state.price}
//               isLoading={isLoading}
//             />
//           </Form>
//         </Col>

//         <Col md={6} className='new-product__image--container'></Col>
//       </Row>
//     </Container>
//   );
// };

// export default EditProductPage;
