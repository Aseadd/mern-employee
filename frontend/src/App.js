import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Register from './pages/register';
import About from './pages/about';
import Header from './components/Header';


function App() {
  return (
    <>
      <Router>
        <div className= 'container'>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
