import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Flight';
import Signup from './components/pages/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/services' element={<Services/>}></Route>
    <Route path='/flight' element={<Products/>}></Route>
    <Route path='/sign-up' element={<Signup/>}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
