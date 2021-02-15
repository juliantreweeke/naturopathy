import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import styles from './footer.module.css';

const Footer = ({links}) => {

  const navLinks = links.map(({ image, url }, index) => (
    <li className={styles.link} key={index}>
      <a    
        href={url}
        target="blank"
        rel="noopener noreferrer"
      >
        <img src={image}/>
      </a>
    </li>
  ));


  return (
    <footer className={styles.footer}>
      <Fade bottom>
        <ul className={styles.linksContainer}>
          {navLinks}
        </ul>      
      </Fade>
    </footer>
  );
}

Footer.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

export default Footer;


