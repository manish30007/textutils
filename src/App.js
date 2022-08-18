import './App.css';
import ReactDOM from "react-dom/client";
import Navbar  from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import React,{useState} from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes} 
        from "react-router-dom";

function App() {

  const[mode,setmode]=useState('light');
  const[alert,setalert]=useState(null);
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type});
      setTimeout(() => {
        setalert(null);
      }, 2000);
  }
  const togglemode=()=>{
    if(mode==='light'){setmode('dark');
  document.body.style.backgroundColor="#042542";
  showAlert("dark mode is enabled","success");
  document.title='Textutils-dark mode';
  setInterval(() => {
    document.title='Textutils is Amazing';
  }, 2000);
  setInterval(() => {
    document.title='Install Textutils';
  }, 1500);
}
    else {setmode('light');
    document.body.style.backgroundColor="white";
    showAlert("light mode is enabled","success");
    document.title='Textutils-light mode';

  }
  }
return (
<>
<Router>
<Navbar title="Textutils" aboutText="about us " mode={mode} togglemode={togglemode}  />
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
<Route exact path="/" element={<Textform heading="Enter the text to Analyse" mode={mode} showAlert={showAlert} />} />
<Route exact path="about" element={<About />} />
</Routes>
</div>
</Router>
</>
);
}
export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);