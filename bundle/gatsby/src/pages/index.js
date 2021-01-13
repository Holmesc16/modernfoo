import React, { useState, useContext } from 'react';
import Layout from '../components/Layout';
import foo from '../assets/images/foo_1.png';

const HomePage = (props) => {
  const [secretPassword, setSecretPassword] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Secret Password"
        onClick={() => console.log('clicked')}
      />
      <button type="submit">Enter</button>
    </div>
  );
};

export default HomePage;
