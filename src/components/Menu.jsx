import React from 'react';

import MenuItem from './MenuItem';

const Menu = ({ name, items }) => {
  return (
    <li>
      {name}
      <ul>
        {items.map((item, index) =>
          item.items ? (
            <Menu key={index} name={item.name} items={item.items} />
          ) : (
            <MenuItem key={index} name={item.name} onClick={item.onClick} />
          )
        )}
      </ul>
    </li>
  );
};

export default Menu;