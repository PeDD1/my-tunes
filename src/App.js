import React from 'react';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes >
          <Route exact path="/" element={ <Login />} />
          <Route exact path="/search" element={ <Search />} />
          <Route exact path="/album/:id" element={ <Album /> } />
          <Route exact path="/favorites" element={ <Favorites /> } />
          <Route exact path="/profile" element={ <Profile /> } />
          <Route exact path="/profile/edit" element={ <ProfileEdit /> } />
          <Route path="/" element={ < NotFound /> } />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
