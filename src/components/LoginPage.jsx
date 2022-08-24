import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../providers/AuthProvider';

const LoginPage = () => {
    const navigate = useNavigate();

    const { onLogIn } = useAuthContext();

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleLogin = async (e) => {
        e.preventDefault();
        const formData = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        try{
            const res = await fetch('http://localhost:4001/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            if (res.ok) {
                console.log(data);
                onLogIn(data);
                navigate('/');
            }
        } catch(err) {
            console.error(err);
        }
    }

    return(
        <form onSubmit={handleLogin}>
            <input type="email" placeholder="Email" ref={emailRef} required/>
            <input type="password" placeholder="Password" ref={passwordRef} required/>
            <button type="submit">Submit</button>
            <button type="reset">Clear</button>
        </form>
    );
}

export default LoginPage;