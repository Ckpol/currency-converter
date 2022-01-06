import React from 'react';
import ConverterBox from './components/ConverterBox/ConverterBox';
import './styles/App.css';
import {Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ConverterBox />}/>
        <Route path='/:path' element={<ConverterBox />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
