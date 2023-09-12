import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Conta from './Conta'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Account' element={<Conta/>} />
        <Route path=''/>
      </Routes>
    </Router>
  );
}

