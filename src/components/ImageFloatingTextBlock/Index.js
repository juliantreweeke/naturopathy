import PropTypes from 'prop-types';
import React from 'react';
import styles from './imageFloatingTextBlock.module.css';

const ImageFloatingTextBlock = ({ children, image }) => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <img src={image} />
        <div className={styles.floatingTextBlockContainer}>
          <div className={styles.floatingTextBlock}>{children}</div>
        </div>
      </div>
    </section>
  );
};

ImageFloatingTextBlock.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string.isRequired,
};

export default ImageFloatingTextBlock;
