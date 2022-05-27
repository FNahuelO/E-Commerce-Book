import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Details from './Components/Books//Detail/Details';
import HomePage from './Pages/Home'
import Layout from './Pages/Layout'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Layout />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/book/:id' element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
