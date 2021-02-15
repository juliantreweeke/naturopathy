import PropTypes from 'prop-types';
import React from 'react';
import styles from './heading.module.css';

const Heading = ({ children, headingLevel, style, variant }) => {

  const validHeadingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

  const Title = validHeadingLevels.includes(headingLevel) ? headingLevel : 'p'; 

  return (
    <Title style={style} className={styles.heading} data-variant={variant}>{children}</Title>
  );
};

Heading.propTypes = {
  children: PropTypes.node,
  headingLevel: PropTypes.string.isRequired,
  styles: PropTypes.object,
  variant: PropTypes.string,
};

export default Heading;
