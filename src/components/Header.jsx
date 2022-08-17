import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const jwt = localStorage.getItem('jwt');
    console.log(jwt);
    const testAuth = async () => {
        try{
            const res = await fetch('http://localhost:4001/api/user/test', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${jwt}`,
                    'Content-Type': 'application/json'
                }
            });
            const data = await res.json();
            console.log(data, res.status);
        } catch(err) {
            console.error(err);
        }
    }

    return(
        <header>
            <ul>
                <li>
                    <Link to="/">Main</Link>
                </li>
                <li>
                    <Link to="/login">Sign In</Link>
                </li>
                <li>
                    <Link to="/registry">Sign up</Link>
                </li>
                <li>
                    <button onClick={testAuth}>Show me my email!</button>
                </li>
            </ul>
        </header>
    );
}

export default Header;