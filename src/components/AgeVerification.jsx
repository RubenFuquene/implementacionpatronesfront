import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography, Snackbar, Alert } from '@mui/material';

const AgeVerification = () => {
  const [age, setAge] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (age >= 18) {
      localStorage.setItem('ageVerified', true);
      setSnackbarMessage('Acceso permitido. Redirigiendo...');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } else {
      setSnackbarMessage('Debes ser mayor de 18 años para acceder a esta página.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: 'background.default',
        color: 'text.primary',
      }}
    >
      <Typography variant="h1" gutterBottom>
        Verificación de Edad
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          label="Por favor, ingresa tu edad"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Verificar
        </Button>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AgeVerification;