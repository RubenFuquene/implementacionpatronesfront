import React, {useState} from 'react';
import { List, ListItem, ListItemText, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import MenuItem from './MenuItem';

const Menu = ({ name, items }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items.map((item, index) =>
            item.items ? (
              <Menu key={index} name={item.name} items={item.items} />
            ) : (
              <MenuItem key={index} name={item.name} onClick={item.onClick} />
            )
          )}
        </List>
      </Collapse>
    </>
  );
};

export default Menu;