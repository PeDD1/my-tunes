import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes';
import './App.css';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </main>
  );
}

export default App;
