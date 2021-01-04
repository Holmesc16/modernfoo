import React, { useState, useContext } from 'react';
import Layout from '../components/Layout';
import foo from '../assets/images/foo_1.png';

const HomePage = (props) => {
  const [hasEnteredSecretPassword, setHasEnteredSecretPassword] = useState(
    false
  );

  return (
    <div>
      <button type="submit">What's good fuhl</button>
    </div>
  );
};

export default HomePage;
