import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform'; 
import { Routes, Route } from 'react-router-dom';

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
    }, 1024    )
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
    <Navbar title = "TextUtils" mode={mode}  togglemode={togglemode} about = "About US"/>   
    <Alert   alert = {alert} />

    <Routes>
      <Route exact path='/home' element={<div className = "container my-3">
    <Textform showAlert={showAlert}  heading = "Enter Messsege"  mode={mode}  /></div>}>
      </Route>
      <Route exact path='/about' element={ <About/>}></Route>
    </Routes>  
    </>
  );
}
export default App;