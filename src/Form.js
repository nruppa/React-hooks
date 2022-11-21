import React, { useState } from 'react'
import { Paper, Grid, TextField, Button } from '@material-ui/core'
import { Outlet  } from "react-router-dom";

function Form() {
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

     const Submit= (e) => {
        e.preventDefault();
        const value = ({
            FirstName,
            LastName,
            Email,
            Password
        });
        console.log(value);
    }
    return (
        <div>
        <div>
            <Paper elevation={10} style={{ padding: 20, height: '60vh', width: "263px", margin: "144px auto" }}>
                <Grid align='center'>
                    <h2>Form</h2>
                </Grid>
                <form onSubmit={Submit}>
                    <TextField label='FirstName' placeholder='FirstName' fullWidth required
                        onChange={e => { setFirstName(e.target.value) }} />  
                    <TextField label='LastName' placeholder='lastName' type='text' fullWidth required
                        onChange={e => { setLastName(e.target.value) }} />

                    <TextField label='Email' placeholder='email ' type='Email' fullWidth required
                        onChange={e => { setEmail(e.target.value) }}
                    />
                    <br></br>
                    <TextField label='Password' placeholder=' password' type='password' fullWidth required
                        onChange={e => { setPassword(e.target.value) }} /><br></br>
                    <Button type='submit' variant="contained" style={{ margin: '8px 0' }}>Sign in</Button>
                </form>
            </Paper>
            </div>
            <Outlet />
        </div>
    )
}
export default Form