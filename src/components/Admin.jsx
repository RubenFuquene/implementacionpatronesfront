import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, List, AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import MenuItem from './MenuItem';
import MenuOriginator from '../memento/MenuOriginator';
import Caretaker from '../memento/Caretaker';
import AddMenuItemCommand from '../command/AddMenuItemCommand';
import logo from '../../resources/logo.jpeg'

const initialMenuStructure = [
  {
    name: 'Home',
    onClick: () => alert('Home clicked')
  },
  {
    name: 'Products',
    items: [
      {
        name: 'Beverages',
        items: [
          {
            name: 'Alcoholic',
            onClick: () => alert('Alcoholic clicked')
          },
          {
            name: 'Non-Alcoholic',
            onClick: () => alert('Non-Alcoholic clicked')
          }
        ]
      },
      {
        name: 'Snacks',
        onClick: () => alert('Snacks clicked')
      }
    ]
  },
  {
    name: 'Contact',
    onClick: () => alert('Contact clicked')
  }
];

const menuOriginator = new MenuOriginator(initialMenuStructure);
const caretaker = new Caretaker(menuOriginator);

const Home = () => {
  const [menuStructure, setMenuStructure] = useState(initialMenuStructure);

  useEffect(() => {
    menuOriginator.setState(menuStructure);
  }, [menuStructure]);

  const handleAddMenuItem = () => {
    const newItem = { name: 'New Item', onClick: () => alert('New Item clicked') };
    const command = new AddMenuItemCommand(caretaker, newItem, menuStructure, setMenuStructure);
    command.execute();
  };

  const handleUndo = () => {
    caretaker.undo();
    setMenuStructure(menuOriginator.getState());
  };

  const handleRedo = () => {
    caretaker.redo();
    setMenuStructure(menuOriginator.getState());
  };

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: '#FBEBE8', color: 'black' }}>
        <Toolbar>
          <Typography variant="h6" component={Link} to="/" color="inherit" sx={{ flexGrow: 1, textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Subar Logo" style={{ marginRight: '8px', height: '32px' }} /> {/* Logo */}
            Subar
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ mt: 4 }}>
        <Box sx={{ mb: 2 }}>
          <Button variant="contained" color="primary" onClick={handleAddMenuItem} sx={{ mr: 1 }}>
            Add Menu Item
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleUndo} sx={{ mr: 1 }}>
            Undo
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleRedo}>
            Redo
          </Button>
        </Box>
        <List>
          {menuStructure.map((item, index) =>
            item.items ? (
              <Menu key={index} name={item.name} items={item.items} />
            ) : (
              <MenuItem key={index} name={item.name} onClick={item.onClick} />
            )
          )}
        </List>
      </Box>
    </>
  );
};

export default Home;