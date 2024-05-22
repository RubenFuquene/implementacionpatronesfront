import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../../resources/logo.jpeg'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    if (email === 'admin') {
      navigate('/admin');
    }else{
      navigate('/catalog');
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', padding: 2, boxShadow: 2, borderRadius: 4, bgcolor: 'background.paper' }}>
      <Avatar sx={{ mx: 'auto', my: 2 }} alt="Logo" src={logo} />
      <Typography variant="h5" align="center" gutterBottom>
        Iniciar Sesión
      </Typography>
      <TextField
        label="Email"
        type="email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Contraseña"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
        Iniciar Sesión
      </Button>
    </Box>
  );
};

export default Login;
