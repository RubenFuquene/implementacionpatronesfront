import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../../resources/logo.jpeg'

const ProductCatalog = () => {
  // Aquí podrías incluir la lógica para obtener y mostrar los productos del catálogo

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: '#FBEBE8', color: 'black' }}>
        <Toolbar>
          <Typography variant="h6" component={Link} to="/" color="inherit" sx={{ flexGrow: 1, textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Subar Logo" style={{ marginRight: '8px', height: '32px' }} /> {/* Logo */}
            Subar
          </Typography>
          <Button component={Link} to="/cart" color="inherit" startIcon={<ShoppingCartIcon />} sx={{ color: 'black' }}>
            Carrito de Compras
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Catálogo de Productos
        </Typography>
        {/* Aquí podrías mostrar la lista de productos */}
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            {/* Aquí podrías incluir un componente de producto */}
            <Box sx={{ bgcolor: 'background.paper', p: 2, borderRadius: 4 }}>
              <Typography variant="h6" gutterBottom>
                Producto test 1
              </Typography>
              <Typography variant="body1" gutterBottom>
                Descripción del Producto test 1
              </Typography>
              <Button component={Link} to="/producto-1" variant="contained" color="primary" fullWidth>
                Ver Detalles
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ bgcolor: 'background.paper', p: 2, borderRadius: 4 }}>
              <Typography variant="h6" gutterBottom>
                Producto test 2
              </Typography>
              <Typography variant="body1" gutterBottom>
                Descripción del Producto test 2
              </Typography>
              <Button component={Link} to="/producto-2" variant="contained" color="primary" fullWidth>
                Ver Detalles
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Subar. Todos los derechos reservados.
        </Typography>
      </Box>
    </>
  );
};

export default ProductCatalog;
