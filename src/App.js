import React from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Profile from './components/Profile';
import Leaderboards from './components/Leaderboards';
import './App.css'
import Tournaments from './components/Tournaments';

function App() {
  return (
    <Router>
      <div className="home">
        <h1 className='home-heading'>Lichess Explorer</h1>
        <nav>
          <Link className='links' to="/profile">Profile</Link> | 
          <Link className='links' to="/leaderboards">Leaderboards</Link> | 
          <Link  className='links' to="/tournaments">Tournaments</Link>
        </nav>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/leaderboards" element={<Leaderboards />} />
          <Route path="/tournaments" element={<Tournaments />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
