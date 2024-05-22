import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Avatar } from '@mui/material';
import logo from '../../resources/logo.jpeg'

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Aquí puedes implementar la lógica de registro
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', padding: 2, boxShadow: 2, borderRadius: 4, bgcolor: 'background.paper' }}>
      <Avatar sx={{ mx: 'auto', my: 2 }} alt="Logo" src={logo} />
      <Typography variant="h5" align="center" gutterBottom>
        Registrarse
      </Typography>
      <TextField
        label="Nombre"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <Button variant="contained" color="primary" fullWidth onClick={handleRegister}>
        Registrarse
      </Button>
    </Box>
  );
};

export default Register;
