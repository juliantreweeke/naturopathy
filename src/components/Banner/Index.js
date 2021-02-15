import PropTypes from 'prop-types';
import React from 'react';
import styles from './banner.module.css';
import { Link } from 'gatsby';

const Banner = ({ backgroundImage, children, route, linkText }) => {
  const style = { '--background-url': `url(${backgroundImage})` };
  return (
    <section style={style} className={styles.banner}>
      {children}
      {route && <Link to={`/${route}`}>{linkText}</Link>}
    </section>
  );
};

Banner.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  children: PropTypes.node,
  linkText: PropTypes.string,
  route: PropTypes.string,
};

export default Banner;
