import React, { useRef } from 'react';

import { useAuthContext } from '../providers/AuthProvider';

const Dashboard = () => {
    const { user, token } = useAuthContext();
    const todoRef = useRef();
    const dateRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            date: dateRef.current.value,
            todo: todoRef.current.value,
        }
        try {
            const res = await fetch('http://localhost:4001/api/todo/create', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <h3>Hello, {user.name}!</h3>
            <p>You can create new TODOs here</p>
            <form onSubmit={handleSubmit}>
                <input type="date" placeholder='Expiration Date' ref={dateRef} required/>
                <input type="text" placeholder="TO-DO" ref={todoRef} required/>
                <button type="submit">Submit</button>
                <button type="reset">Clear</button>
            </form>
            <div className="wrapper">
            {user?.todos?.length && user.todos.map(todo => (
                <div className="todo" key={todo._id}>
                    <span><input type="checkbox"/></span>
                    <span><p>{todo.date}</p></span>
                    <span><p>{todo.todo}</p></span>
                </div>
            ))}
            </div>
        </>
    );
}

export default Dashboard;