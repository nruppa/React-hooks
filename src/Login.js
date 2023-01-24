import React, { useState, setToken } from 'react'

function Login() {

    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled,setDisabled]=useState(0);

    const handleSubmit = (e) => {
        e.preventDefault(
            setDisabled(!e)
        );
        const value = Login({
            username,
            email,
            password,
        });
        setToken(value);
    }
    const isValid =username && email && password
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)}
                    />
                </label>
                <label>
                    <p>Email</p>
                    <input type="email" onChange={e => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}
                    />
                </label>
                <div>
                    <button type="submit" disabled={!isValid}>Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Login











