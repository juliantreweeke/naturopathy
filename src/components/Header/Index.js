import React from 'react';
import Fade from 'react-reveal/Fade';
import Burger from '../Burger/Index';
import PropTypes from 'prop-types';
import { Link } from "gatsby";
import styles from './header.module.css';
import Logo from '../Logo';


const Header = ({links, isMenuOpen, toggleMenuOpen}) => {

  const navLinks = links.map(({ title, link }, index) => (
    <li className={styles.navItem} key={index}>
      <Link    
        to={`/${link}`}
        activeStyle={{ 
                      borderBottom: `#ea9f5e 4px solid`,
                    }}
      >
        {title}
      </Link>
    </li>
  ));


  return (
    <header data-is-menu-open={isMenuOpen}>
      <Fade top>
        <nav className={styles.nav}>
          {Logo}
          <ul className={styles.navList}>
          {navLinks}
          </ul> 
        <Burger ariaLabelId="menu-label" isMenuOpen={isMenuOpen} toggleMenuOpen={toggleMenuOpen}/>
        <span hidden id="menu-label">Menu</span>
        <ul data-is-menu-open={isMenuOpen} className={styles.navListMobile}>
          {navLinks}
        </ul> 
        </nav>      
      </Fade>
    </header>
  );
}

Header.propTypes = {
  mobileMenuState: PropTypes.objectOf(
    PropTypes.shape({
      mobileMenuOpen: PropTypes.bool,
      toggleMobileMenu: PropTypes.func,
    })
  ),
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};

export default Header;


