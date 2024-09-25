import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function RegistrationPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if(password !== confirmPassword){
            setError('Passwords do not Match');
            return
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                Email: <input  value={email} onChange={(e) => setEmail(e.target.value)}/>
                Password: <input value={password} onChange={(e) => setPassword(e.target.value)} />
                Confirm Password: <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /> 
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default Register;
