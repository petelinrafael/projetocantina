import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PagPrincipal from './pages/home';

function App() {
  return (
    <Router>
      <div>
        {/* Defina as rotas para cada página */}
        <Routes>
          <Route path="/" element={<PagPrincipal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;