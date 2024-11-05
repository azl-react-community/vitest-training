// src/components/UserFetcher.js
import React, { useEffect, useState } from 'react';

const UserFetcher = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('https://api.example.com/user/1');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setUser(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []); // Empty dependency array means this runs once after the initial render

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
      <div>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
      </div>
    );
};

export default UserFetcher;
