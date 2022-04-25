import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Routes from './components/Routes';

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
