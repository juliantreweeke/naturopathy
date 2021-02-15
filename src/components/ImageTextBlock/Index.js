import PropTypes from 'prop-types';
import React from 'react';
import styles from './imageTextBlock.module.css';

const ImageTextBlock = ({ children, imageLeft, imageRight}) => {
  return (
    <section
      className={styles.imageTextBlock}
      style={{
        flexWrap: imageRight ? 'wrap-reverse' : 'wrap'
      }}
    > 
      { imageLeft &&  <img src={imageLeft}/>}
      <div
        className={styles.imageTextBlockContent}
      > 
        {children}
      </div>
      {imageRight &&  <img src={imageRight}/>}
    </section>
  );
};

ImageTextBlock.propTypes = {
  children: PropTypes.node,
  imageLeft: PropTypes.string,
  imageRight: PropTypes.string,
};

export default ImageTextBlock;