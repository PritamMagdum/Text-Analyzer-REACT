import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="MAGDUM" about="AboutUs"></Navbar>   {/*Navbar with props*/}
      {/* <Navbar></Navbar> */}
      <div className="container my-3">
        <TextForm heading="Enter your text to analyse"></TextForm>

      </div>
    </>

  );
}

export default App;
