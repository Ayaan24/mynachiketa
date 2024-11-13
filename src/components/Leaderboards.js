import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Leaderboards = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboards = async () => {
      try {
        const response = await axios.get('https://lichess.org/player');
        setLeaderboard(response.data.slice(0, 10));
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      }
    };

    fetchLeaderboards();
  }, []);

  return (
    <div>
      <h2>Top 10 Players</h2>
      <ul>
        {leaderboard.map((player, index) => (
          <li key={index}>
            {index + 1}. {player.username} - Rating: {player.perf || 'N/A'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboards;
