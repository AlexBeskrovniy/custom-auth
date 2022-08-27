import React from 'react';
import { Link } from 'react-router-dom';

import { useAuthContext } from '../providers/AuthProvider';

const Header = () => {
    const { user, onLogOut } = useAuthContext();
    console.log(user);
    return(
        <header>
            <ul>
                <li>
                    <Link to="/">Main</Link>
                </li>
                {!user && (
                    <>
                        <li>
                            <Link to="/login">Sign In</Link>
                        </li>
                        <li>
                            <Link to="/registry">Sign up</Link>
                        </li>
                    </>    
                )}
                <li>
                    <Link to="/private">Private page</Link>
                </li>
                {user && (
                    <>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <button onClick={onLogOut}>Logout</button>
                        </li>
                    </>
                )} 
            </ul>
        </header>
    );
}

export default Header;