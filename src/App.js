import React from 'react';
// import './styles/App.css';

import Home from './components/Home.js';
import About from './components/About.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './components/Register';
import LogIn from './components/LogIn.js';
import Update from './components/Update.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='*' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<LogIn/>}/>
      <Route path='/update' element={<Update/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
