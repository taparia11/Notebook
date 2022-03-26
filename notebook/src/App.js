import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/about" element={<About />}/>
          </Routes>
    </Router>
    </>
  );
}

export default App;
