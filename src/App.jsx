import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from './components/Auth';


const App = () => {

  return (
    <Router>
      <Routes>
      <Route exact path="/"  element={ <Auth/> } />
      <Route  exact path="/home" element={ <Home />} />  
      </Routes>
    </Router>

  
  );
};

export default App;
