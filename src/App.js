// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

let name = "<b>Aditya</b>";
function App() {
  return (
    <>
    <Navbar/>
    <div className="container my-3">
      
    <Textform heading="Enter your Name"/>
    </div>
      {/* <Navbar title="React Website" aboutText="About React"/>  */}
      {/* Returns my Navbar component which is created in the Component Folder*/}
    </>
  );
}

export default App;
