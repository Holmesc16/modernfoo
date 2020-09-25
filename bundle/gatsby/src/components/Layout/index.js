import React from 'react';
import Nav from '../Nav';
import Footer from '../Footer';
import 'normalize.css';

const Layout = ({ children }) => (
  <div>
    <Nav />
    {children}
    <Footer />
  </div>
);

export default Layout;
