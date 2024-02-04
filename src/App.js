import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';

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
      <Navbar title="MAGDUM" about="AboutUs" mode={mode} toggleMode={toggleMode}></Navbar>   {/*Navbar with props*/}
      {/* <Navbar></Navbar> */}
      <div className="container my-3">
        <TextForm heading="Enter your text to analyse"></TextForm>

        {/* <About></About> */}
      </div>
    </>

  );
}

export default App;
