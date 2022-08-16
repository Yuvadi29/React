// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react';

let name = "<b>Aditya</b>";
function App() {
  const [mode,setMode] = useState('light'); //It will enable us to see whether the dark mode is enabled or not
  //This function will toggle the Navbar color to light and dark
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('yellow');
      document.body.style.backgroundColor = 'yellow';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Navbar title="ReactApp" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    <Textform heading="Enter your Name" mode={mode}/>
    {/* <About/> */}
    </div>
      {/* <Navbar title="React Website" aboutText="About React"/>  */}
      {/* Returns my Navbar component which is created in the Component Folder*/}
    </>
  );
}

export default App;
