import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarComponent from './Components/NavbarComponent';
import TopCardsComponent from './Components/TopCardsComponent';
import BottomCardsComponent from './Components/BottomCardsComponent';

function App() {
  return (
    <div className="App bg-white dark:bg-darkBG1 min-h-screen">
      <NavbarComponent/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <TopCardsComponent/>
      <br/>
      <br/>
      <br/>
      <BottomCardsComponent/>
    </div>
  );
}

export default App;
