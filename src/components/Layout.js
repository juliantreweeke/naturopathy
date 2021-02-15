import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { ScrollingProvider } from 'react-scroll-section';
import config from 'react-reveal/globals';
import preset from '@rebass/preset';
import Footer from "./Footer";
import Header from "./Header";
import colors from '../../colors';
import Helmet from './Helmet';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before { 
    box-sizing: inherit;
    }

  body {
    box-sizing: border-box; 
    margin: 0;
    font-family: Cabin, 'Open Sans', sans-serif;
    line-height: 1.6;
    font-weight: 400;
    overflow-x: hidden;
    overflow: ${props => props.mobileMenuOpen ? "hidden" : ""};
    color: #6b5858;
    font-size: 1.5em;
  }

  html {
    font-size: 62.5%; 
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 2rem;
    font-weight: 700; }

  h1 { font-size: 3.2rem; line-height: 1.2;  letter-spacing: -.1rem;}
  h2 { font-size: 3.0rem; line-height: 1.25; letter-spacing: -.1rem; }
  h3 { font-size: 2.4rem; line-height: 1.3;  letter-spacing: -.1rem; }
  h4 { font-size: 2.2rem; line-height: 1.35; letter-spacing: -.08rem; }
  h5 { font-size: 2.0rem; line-height: 1.5;  letter-spacing: -.05rem; }
  h6 { font-size: 1.8rem; line-height: 1.6;  letter-spacing: 0; }
  
  /* Larger than phablet */
  @media (min-width: 550px) {
    h1 { font-size: 5.0rem; }
    h2 { font-size: 4.2rem; }
    h3 { font-size: 3.6rem; }
    h4 { font-size: 3.0rem; }
    h5 { font-size: 2.4rem; }
    h6 { font-size: 1.5rem; }
  }
  
  p {
    margin-top: 0; 
  }

  @media screen and (min-width: 40em) {
    h1 {
      font-size: 4.8rem;
    }
    h3 {
      font-size: 3.6rem;
    }
    p {
      font-size: 2rem;
    }

  }

  @media screen and (min-width: 52em) {
    p {
      font-size: 1.8rem;
    }
  }


  @media (min-width: 550px) {
    h1 { font-size: 5.0rem; }
    h2 { font-size: 4.2rem; }
    h3 { font-size: 3.6rem; }
    h4 { font-size: 3.0rem; }
    h5 { font-size: 2.4rem; }
    h6 { font-size: 1.5rem; }
  }

  a {
    text-decoration:none;
    color:${colors.primary}
  }



`;

config({ ssrFadeout: true });

const theme = {
  ...preset,
  colors,
  fonts: {
    body: 'Cabin, Open Sans, sans-serif',
    heading: 'inherit',
    monospace: 'monospace',
  },
};

const links = [
  {
    title: 'HOME',
    link: ''
  },
  {
    title: 'ABOUT',
    link: 'about'
  },
  {
    title: 'BOOKINGS',
    link: 'bookings'
  }, 
]

const Layout = ({ children }) => {

  const [mobileMenuOpen, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => setMobileMenu(!mobileMenuOpen);

  const mobileMenuState = {mobileMenuOpen, toggleMobileMenu};
  console.log(mobileMenuState);

  return (
    <main>
      <GlobalStyle mobileMenuOpen={mobileMenuOpen} />
      <ThemeProvider theme={theme}>
        <ScrollingProvider>
          <Helmet />
          <Header mobileMenuState={mobileMenuState} links={links} />
          {children}
          <Footer />
        </ScrollingProvider>
      </ThemeProvider>
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
