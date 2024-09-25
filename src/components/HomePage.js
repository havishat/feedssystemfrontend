import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function HomePage(){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
      };

    return (
        <div className="home-container">
            <h1>Welcome to Feeds Home Page</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default HomePage;