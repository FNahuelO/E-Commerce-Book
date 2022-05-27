import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Details from './Components/Books/Detail/Details';
import HomePage from './Pages/Home'
import Layout from './Pages/Layout'
import Carrito from './Pages/Carrito'
import Login from './Pages/Login'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Layout />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/book/:id' element={<Details />} />
          <Route path='/carrito' element={<Carrito />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
