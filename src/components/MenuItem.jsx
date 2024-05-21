import React from 'react';

const MenuItem = ({ name, onClick }) => {
  return (
    <li onClick={onClick}>
      {name}
    </li>
  );
};

export default MenuItem;