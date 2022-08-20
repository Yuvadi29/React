// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

// let name = "<b>Aditya</b>";
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
      <Router>
        <Navbar title="ReactApp" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">

          {/*A Switch looks through its childeren Routes and renders the first one that matches the current URL */}

           <Switch>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
            <Route exact path="/">
              <Textform showAlert={showAlert} heading="Enter your text" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>

      {/* <About/> */}
      {/* Returns my Navbar component which is created in the Component Folder*/}
    </>

  );
}

export default App;
