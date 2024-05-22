import React from 'react';
import { ListItem, ListItemText } from '@mui/material';

const MenuItem = ({ name, onClick }) => {
  return (
    <ListItem button onClick={onClick}>
      <ListItemText primary={name} />
    </ListItem>
  );
};

export default MenuItem;