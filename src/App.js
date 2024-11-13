import React from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Profile from './components/Profile';
import Leaderboards from './components/Leaderboards';
import Tournaments from './components/Tournaments';

function App() {
  return (
    <Router>
      <div>
        <h1>Lichess Explorer</h1>
        <nav>
          <Link to="/profile">Profile</Link> | 
          <Link to="/leaderboards">Leaderboards</Link> | 
          <Link to="/tournaments">Tournaments</Link>
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
