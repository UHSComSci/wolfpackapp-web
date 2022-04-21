import React, { Component }  from 'react';
import { Navbar } from 'react-bootstrap';
import './App.css';
// import Navbar from './components/Navbar/NavbarElements';
import NavbarCustom from './components/Navbar';


function App() {
  return (
    <div className = 'App'>
      <NavbarCustom></NavbarCustom>
    </div>
  );
}

export default App;
