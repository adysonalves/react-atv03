import React from 'react';
import './App.css';
import TelaLogin from './screens/LoginBootstrap';
import Cadastro from './screens/Cadastro';
import Home from './screens/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<TelaLogin />} />
        <Route path='/cadastro' exact element={<Cadastro />} />
        <Route path='/home' exact element={<Home />} />
      </Routes>
    </Router>   
    
  );
}

export default App;
