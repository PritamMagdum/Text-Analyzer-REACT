import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {
  return (
    <>
      <Navbar title="MAGDUM" about="AboutUs"></Navbar>   {/*Navbar with props*/}
      {/* <Navbar></Navbar> */}
      <div className="container my-3">
        <TextForm heading="Enter your text to analyse"></TextForm>

        {/* <About></About> */}
      </div>
    </>

  );
}

export default App;
