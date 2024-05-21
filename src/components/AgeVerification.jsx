import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AgeVerification = () => {
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (age >= 18) {
      localStorage.setItem('ageVerified', true);
      navigate('/');
    } else {
      alert('Debes ser mayor de 18 años para acceder a esta página.');
    }
  };

  return (
    <div>
      <h1>Verificación de Edad</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Por favor, ingresa tu edad:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </label>
        <button type="submit">Verificar</button>
      </form>
    </div>
  );
};

export default AgeVerification;