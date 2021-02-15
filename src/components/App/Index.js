import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer/Index';
import Header from '../Header/Index';
import Helmet from '../Helmet/Index';
import Headroom from 'react-headroom';
import './app.css';
import { links, socialMediaLinks } from '../../navigation';

const App = ({ children, fullWidth }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="app" data-is-menu-open={isMenuOpen} data-full-width={fullWidth}>
      <Helmet />
      <Headroom>
        <Header
          links={links}
          isMenuOpen={isMenuOpen}
          toggleMenuOpen={toggleMenuOpen}
        />
      </Headroom>
      <main>{children}</main>
      <Footer links={socialMediaLinks} />
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool,
};

export default App;
