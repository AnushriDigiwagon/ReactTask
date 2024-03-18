import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Grid, Paper, TextField, Button } from "@mui/material";
export default function LoginForm() {

    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = formData;
        if (email === 'admin@example.com' && password === "admin") {
            return <Navigate to="admin-dashboard" />
        } else if (email === 'user@example.com' && password === "user") {
            return <Navigate to="user-dashboard" />
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5">React Task</Typography>
                </Toolbar>
            </AppBar>
                <Grid container justifyContent="center" alignItems="center" height="50vh" sx={{mt:4}}>
                    <Grid item xs={5}>
                        <Paper elevation={2} sx={{p:3}}>
                            <Typography variant="h6" align="center">
                                Login Form
                            </Typography>
                            <form onSubmit={handleSubmit}>

                                <TextField fullWidth type="email" label="Email" name="email" margin="normal"  placeholder="Email" value={formData.email} onChange={handleChange} />

                                <TextField fullWidth type="password" label="Password" name="password" margin="normal" placeholder="Password" value={formData.password} onChange={handleChange} />
                                
                                    <Button type="submit" text variant="contained" sx={{mt:2}}>Login</Button>
                            </form>

                        </Paper>
                    </Grid>
                </Grid>
        </div>
    );
}