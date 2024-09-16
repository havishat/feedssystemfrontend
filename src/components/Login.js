import React, { useState }  from "react";
import { useNavigate } from "react-router-dom";


function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        //handle login logic here
        console.log('Logging in with', { email, password})
        try {
            //const response = await axios.post('/api/login', { email, password });
           // localStorage.setItem('token', response.data.token);
            navigate('/home');
          } catch (error) {
            setError('Invalid credentials');
          }
        // // On successful login, navigate to the homepage
        // navigate('/');
    }
    return(
        <div className="login-container">
            <h1>Welcome to Login Page</h1>
            <form onSubmit={handleLogin}>
                <div>
                <label>Email Id:</label>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                </div>
                <div>
                    <label>Password:</label>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit">Login</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
};

export default Login;