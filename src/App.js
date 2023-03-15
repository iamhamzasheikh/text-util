import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform'; 
import {Route, BrowserRouter, Routes } from 'react-router-dom';

 function App () {
  
  const [mode, setMode] = useState('light');    //wheather dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (messege, type) =>{
    setAlert({
      msg: messege,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    }, 1000    )
  }
  const togglemode  = ()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.background = '#042743'
      showAlert("Dark Mode is Enable ", 'success');
    }
    else{
      setMode('light');
      document.body.style.background= 'white'
      showAlert("Light Mode is Enable ", 'success');
    }
  }
  return (
    <>
    <BrowserRouter> 
    <Navbar title = "TextUtils" mode={mode}  togglemode={togglemode} about = "About US"/>   
    <Alert   alert = {alert} />
    <Routes>
      <Route exact path='/' element={<Textform showAlert={showAlert}  heading = "Enter Messsege"  mode={mode}  />}>
      </Route>
      <Route exact path='/about' element={ <About  mode={mode} />}></Route>
    </Routes>  
    </BrowserRouter>
    </>
  ); 
}
export default App;