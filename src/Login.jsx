import  { useState } from 'react';
import { Container, Row ,Col, Button } from 'react-bootstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <Container fluid className=' vh-100 bg-black text-white py-5' >
      <Row>
        <Col className=' d-flex align-items-center justify-content-center flex-column '>
        <h1>Login</h1>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <Button >Login</Button>
        </Col>
      </Row>
      
    </Container>
  );
};

export default Login;
