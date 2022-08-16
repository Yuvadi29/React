// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';

let name = "<b>Aditya</b>";
function App() {
  const [mode, setMode] = useState('light'); //It will enable us to see whether the dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  //Function to show alert
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  //This function will toggle the Navbar color to light and dark
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#002D62';
      showAlert("Dark Mode Enabled", "success");
      document.title = 'React - Dark mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success");
      document.title = 'React - Light mode';
    }
  }
  return (
    <>
      <Navbar title="ReactApp" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Textform showAlert={showAlert} heading="Enter your text" mode={mode} />
        {/* <About="About React"/> */}
        {/* Returns my Navbar component which is created in the Component Folder*/}
    </div>
    </>
    
    );
}


export default App;
