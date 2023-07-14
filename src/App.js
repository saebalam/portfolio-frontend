import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import { useRef, useState } from 'react';
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom';

document.documentElement.className='dark'

function App() {
  const [theme,setTheme]=useState('dark')

  const handleToggle=()=>{
    if(theme=='light'){
      console.log('light theme')
      setTheme('dark')
      setTimeout(()=>{

        document.documentElement.className='dark'
      },200)
    }else{
      console.log('dark theme')
      setTheme('light')
      document.documentElement.className='light'
    }
  }

  return (
    <div className="App">

      <div className="toggle-container toggle-button" onChange={handleToggle}>
        <input type="checkbox" name="" id="check" />
        <label htmlFor="check" className='check-button' />
      </div>

      {/* <button className='toggle-button' onClick={handleToggle}>toggle</button> */}

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>

      {/* <Home /> */}
      
    </div>
  );
}

export default App;
