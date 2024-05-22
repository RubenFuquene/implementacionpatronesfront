import React from 'react';
import { Box, Typography, Button, Grid, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../../resources/logo.jpeg'

const AuthPage = () => {
  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', padding: 2, boxShadow: 2, borderRadius: 4, bgcolor: 'background.paper' }}>
      <Avatar sx={{ mx: 'auto', my: 2 }} alt="Logo" src={logo} />
      <Typography variant="h5" align="center" gutterBottom>
        Bienvenido a Subar
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>
        Ingresa o Regístrate para continuar
      </Typography>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <Button component={Link} to="/login" variant="contained" color="primary" fullWidth>
            Iniciar Sesión
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button component={Link} to="/register" variant="outlined" color="primary" fullWidth>
            Registrarse
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button component={Link} to="/catalog" variant="text" color="primary" fullWidth>
            Ver catálogo sin ingresar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AuthPage;
