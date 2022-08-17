import React, { useRef } from 'react';

const RegistryPage = () => {
    const nameRef = useRef();
    const loginRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name: nameRef.current.value,
            login: loginRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        try{
            const res = await fetch('http://localhost:4001/api/user/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            console.log(data, res.status);
        } catch(err) {
            console.error(err);
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" ref={nameRef} required/>
            <input type="text" placeholder="Login" ref={loginRef} required/>
            <input type="email" placeholder="Email" ref={emailRef} required/>
            <input type="password" placeholder="Password" ref={passwordRef} required/>
            <button type="submit">Submit</button>
            <button type="reset">Clear</button>
        </form>
    );
}

export default RegistryPage;