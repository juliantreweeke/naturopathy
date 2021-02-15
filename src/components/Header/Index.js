import React from 'react';
import Fade from 'react-reveal/Fade';
import Burger from '../Burger/Index';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styles from './header.module.css';
import Logo from '../Logo/Index';

const Header = ({ links, isMenuOpen, toggleMenuOpen }) => {
  const navLinks = links.map(({ title, link, href }, index) => (
    <li className={styles.navItem} key={index}>
      {href ? (
        <a href={href}>{title}</a>
      ) : (
        <Link
          to={`/${link}`}
          activeStyle={{
            borderBottom: `#ea9f5e 4px solid`,
          }}
        >
          {title}
        </Link>
      )}
    </li>
  ));

  return (
    <header className={styles.header} data-is-menu-open={isMenuOpen}>
      <Fade top>
        <nav className={styles.nav}>
          {Logo}
          <ul className={styles.navList}>{navLinks}</ul>
          <Burger
            ariaLabel="menu"
            isMenuOpen={isMenuOpen}
            toggleMenuOpen={toggleMenuOpen}
          />
          <ul data-is-menu-open={isMenuOpen} className={styles.navListMobile}>
            {navLinks}
          </ul>
        </nav>
      </Fade>
    </header>
  );
};

Header.propTypes = {
  isMenuOpen: PropTypes.boolean,
  toggleMenuOpen: PropTypes.func.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
};

export default Header;
