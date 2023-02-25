import './App.css';
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
    
    </>
  );
}

export default App;
