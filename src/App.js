import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,Switch,Route,Link
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState("Light");
  const [alert,setAlert]=useState(null);

  function showAlert(message,type){
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  function changeTheme(){
    if (mode==="Light") {
      setMode("Dark");
      document.body.style.background="linear-gradient(to right, #141e30, #243b55)";
      // document.body.style.background="linear-gradient(to right, #33001b, #ff0084)";
      showAlert("Dark Mode has been enabled.","success");
      document.title="Text Wizard - Dark Mode";
    }
    else{
      setMode("Light");
      document.body.style.background="linear-gradient(to right, #8e2de2, #4a00e0)";
      showAlert("Light Mode has been enabled.","success");
      document.title="Text Wizard - Light Mode";
    }
  }
  return (
    <>
     <Navbar title="Text Wizard" aboutText="About us" mode={mode} toggleMode={changeTheme}  />
     <Alert alert={alert}/>
      <TextForm heading="Enter the text to analyze below: " showAlert={showAlert} mode={mode}/>
    </>
  );
}

export default App;
