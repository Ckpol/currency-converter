import React from 'react';
import ConverterBox from './components/ConverterBox/ConverterBox';
import './styles/App.css';
import {Routes, Route } from 'react-router';
import { Navigate } from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Navigate to='/:path' replace/>} />
        <Route path='/:path' element={<ConverterBox />}/>
      </Routes>
  );
}

export default App;
