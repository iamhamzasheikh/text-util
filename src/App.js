import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {
  const [mode, setMode] = useState('light'); //wheather dark mode is enabled or not
  const togglemode  = ()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.background='#042743'
    }
    else{
      setMode('light');
      document.body.style.background='white'

    }
  }
  return (
    <>
    <Navbar title = "TextUtils" mode={mode}  togglemode={togglemode}
    about = "About US"/>    

    <div className = "container my-3">
    <Textform  heading = "Enter Messsege"  mode={mode}      />
    </div>

    {/* <About/> */}
    
    
    </>
  );
}

export default App;
