import React, { useState, useEffect } from 'react';

import Menu from './Menu';
import MenuItem from './MenuItem';
import MenuOriginator from '../memento/MenuOriginator';
import Caretaker from '../memento/Caretaker';

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
    const newMenuStructure = [
      ...menuStructure,
      { name: 'New Item', onClick: () => alert('New Item clicked') }
    ];
    caretaker.save();
    setMenuStructure(newMenuStructure);
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
    <div>
      <h1>Bienvenido a Subar</h1>
      <p>Tu tienda de bebidas alcohólicas en línea.</p>

      <div>
        <h1>Menu Example</h1>
        <button onClick={handleAddMenuItem}>Add Menu Item</button>
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleRedo}>Redo</button>
        <ul>
          {menuStructure.map((item, index) =>
            item.items ? (
              <Menu key={index} name={item.name} items={item.items} />
            ) : (
              <MenuItem key={index} name={item.name} onClick={item.onClick} />
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Home;