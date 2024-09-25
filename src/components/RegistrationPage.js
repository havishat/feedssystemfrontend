import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function RegistrationPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if(password !== confirmPassword){
            setError('Passwords do not Match');
            return
        }

        // Simulate successful registration
        setSuccess('Registration successful!');
         // Save user info in localStorage
        localStorage.setItem('registeredUser', JSON.stringify({ email, password }));

        // Auto login by storing a "loggedIn" flag in localStorage
        localStorage.setItem('isLoggedIn', 'true');

        // Redirect to the home page
        navigate('/home');
    }
    return(
        <div className="register-container">
            <form onSubmit={handleSubmit}>
                Email: <input  value={email} onChange={(e) => setEmail(e.target.value)} required/>
                Password: <input value={password} onChange={(e) => setPassword(e.target.value)} required />
                Confirm Password: <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required /> 
                <button type="submit">Submit</button>
                 {/* Error and Success Messages */}
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
            </form>

        </div>
    )
}

export default Register;
