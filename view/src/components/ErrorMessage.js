import { Alert } from 'react-bootstrap';

const ErrorMessage = ({ message }) => <Alert variant='danger'>{message}</Alert>;

export default ErrorMessage;
