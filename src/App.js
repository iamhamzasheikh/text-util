import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
    <Navbar title = "TextUtils" 
    about = "About US"/>    
    <div className = "container my-3">
    <Textform  heading = "Enter Messsege" />
    </div>

    {/* <About/> */}
    
    
    </>
  );
}

export default App;
