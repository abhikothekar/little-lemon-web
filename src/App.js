import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main'; // Adjust the path as necessary
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav/>
      <Main/>
      <Menu/>
      <Footer/>
    </>
  );
}

export default App;
