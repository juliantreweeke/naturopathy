import PropTypes from 'prop-types';
import React from 'react';
import styles from './columnLayout.module.css';

const ColumnLayout = ({ left, right, style }) => {
  return (
    <div style={style} className={styles.columnLayout}>
      <section className={styles.column}>{left}</section>
      <section className={styles.column}>{right}</section>
    </div>
  );
};

ColumnLayout.propTypes = {
  props: PropTypes.element,
};

export default ColumnLayout;
