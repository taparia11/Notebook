import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'
import NoteState from "./components/context/notes/NoteState";


function App() {
  return (
    <>
    <NoteState>
      <Navbar heading='Gamer' />
    <Router>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="about" element={<About/>}/>
          {/* <Route exact path="/login" element={<Login />}/> */}
          </Routes>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
