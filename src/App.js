import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"


function App() {
  const [mode, setMode] = useState("light") // whether dark mode is enable or not

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = "white";
    } else {
      setMode('dark')
      document.body.style.backgroundColor = "gray";
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Text Research" about="AboutUs" mode={mode} toggleMode={toggleMode}></Navbar>   {/*Navbar with props*/}
        {/* <Navbar></Navbar> */}
        <div className="container my-3">
          <Routes>
            <Route path='/' element={<TextForm heading="Enter your text to analyse" />}>
              {/* <TextForm heading="Enter your text to analyse"></TextForm> */}
            </Route>
            <Route path='/About' element={<About />}>
              {/* <About></About> */}
            </Route>
          </Routes>
        </div>
      </Router>
    </>

  );
}

export default App;
