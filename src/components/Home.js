import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home(){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();


    return (
        <div className="home-container">
            <h1>Welcome to Feeds Home Page</h1>
        </div>
    );
};

export default Home;