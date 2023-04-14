import React from 'react';
import './App.css';
import Login from './pages/login';
import Nav from './components/Nav';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <main className="form-signin">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
