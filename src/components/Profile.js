import React, { useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  const fetchProfile = async () => {
    try {
      const response = await axios.get(`https://lichess.org/api/user/${username}`);
      setProfile(response.data);
      setError('');
    } catch (error) {
      console.error('Error fetching profile:', error);
      setError('User not found or unable to fetch data');
      setProfile(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      fetchProfile();
    }
  };

  return (
    <div>
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {profile && (
        <div>
          <img
            src={profile.profile?.bio || 'https://via.placeholder.com/100'}
            alt={`${profile.username}'s profile`}
            style={{ width: '100px', height: '100px', borderRadius: '50%' }}
          />
          <p><strong>Username:</strong> {profile.username}</p>
          <p><strong>Bio:</strong> {profile.profile?.bio || 'No bio available'}</p>
          <p><strong>Number of Games Played:</strong> {profile.count?.all || 'N/A'}</p>
          <p><strong>Rating:</strong> {profile.perfs?.blitz?.rating || 'N/A'}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
