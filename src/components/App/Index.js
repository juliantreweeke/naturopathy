import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import Header from '../Header/Index';
import Helmet from '../Helmet';
import './app.css'

const links = [
  {
    title: 'HOME',
    link: '',
  },
  {
    title: 'ABOUT',
    link: 'about',
  },
  {
    title: 'WORK WITH ME',
    link: 'work-with-me',
  },
  {
    title: 'BOOKINGS',
    link: 'bookings',
  },
  {
    title: 'BLOG',
    link: 'blog',
  },
  {
    title: 'CONTACT',
    link: 'contact',
  },
];

const App = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div id="app">
      <Helmet />
      <Header links={links} isMenuOpen={isMenuOpen}
        toggleMenuOpen={toggleMenuOpen}>yo</Header>
      <main>{children}</main>
      <footer>yo</footer>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;