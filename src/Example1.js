import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Paper, Grid } from '@material-ui/core'

function Example1() {
    const validationSchema = yup.object({
        fname: yup
             .string('Enter the characters only')
             // .name('Name is required')
             .max(32, 'Name must be less than 50 characters')
             .required('fname is required'),

        lname: yup
             .string('Enter the characters only')
            //  .name('Name is required')
             .max(32, 'Name must be less than 50 characters')
             .required('lname is required'),
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters ')
            .required('Password is required'),
    });
    const formik = useFormik({
        initialValues: {
            fname:'',
            lname:'',
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);

        },
    });
    return (
        <div>
            <Paper elevation={10} style={{ padding: 20, height: '50vh', width: "263px", margin: "144px auto" }}>
            <Grid align='center'>
                    <h2>Form</h2>
            </Grid>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        id="fname"
                        name="fname"
                        label="FirstName"
                        value={formik.values.fname}
                        onChange={formik.handleChange}
                        error={formik.touched.fname && Boolean(formik.errors.fname)}
                        helperText={formik.touched.fname && formik.errors.fname} />
                        <br></br>
                    <TextField
                        fullWidth
                        id="lname"
                        name="lname"
                        label="LastName"
                        value={formik.values.lname}
                        onChange={formik.handleChange}
                        error={formik.touched.lname && Boolean(formik.errors.lname)}
                        helperText={formik.touched.lname && formik.errors.lname} />
                        <br></br>
                    <TextField
                        fullWidth
                        // id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email} />
                    <br></br>
                    <TextField
                        fullWidth
                        // id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password} 
                        />
                        <br></br>
                        <Button type='submit' variant="contained" style={{ margin: '8px 0' }}>Submit</Button>
                </form>
            </Paper>
        </div>
    );
};

export default Example1