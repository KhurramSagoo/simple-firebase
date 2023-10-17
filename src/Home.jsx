import { Container, Row, Col, Button } from "react-bootstrap";
import {  signOut } from 'firebase/auth'
// import {auth,provider} from '../firebase'
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router-dom';
import { auth } from "./firebase";

const cookies=new Cookies ();
const Home = () => {
  const navigate = useNavigate();

  const signUserOut =async () => {
    try {
      const userOut=await signOut(auth);
      cookies.remove("auth-token", userOut);
      navigate('/');
    } catch (err) {
      console.log(err)
      
    }
  }
  return (
    <Container fluid className=' vh-100 bg-black text-white py-5' >
    <Row>
      <Col className=' d-flex align-items-center justify-content-center flex-column '>
      <h1>
        Welcome to Home Page!
      </h1>
      </Col>
    </Row>
    <Row>
      <Col className=' d-flex align-items-center justify-content-center flex-column '>
     <Button onClick={signUserOut}>Sign Out</Button>
      </Col>
    </Row>
    
  </Container>
  );
};

export default Home;
