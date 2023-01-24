import React from 'react'

function Test() {
    // const isValid=username && password
    return (
        <div>test
            <label>
                <p>Username</p>
                <input type="username"
                name="username"
                />
            </label>
            <label>
                <p>Email</p>
                <input type="password"
                name="password"
                />
            </label>
            <label>
                <p>Password</p>
                <input type="password"

                />
            </label>
            <button type="submit" disabled>Submit</button>
        </div>
    )
}

export default Test