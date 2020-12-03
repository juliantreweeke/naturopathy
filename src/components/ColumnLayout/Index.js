import PropTypes from "prop-types";
import React from "react";
import styles from "./columnLayout.module.css";

const ColumnLayout = (props) => {
  return (
    <div className={styles.columnLayout}>
      <section className={styles.column}>
        {props.left}
      </section>
      <section className={styles.column}>
        {props.right}
      </section>
      </div>
  )
}

ColumnLayout.propTypes = {
  props: PropTypes.element,
}


export default ColumnLayout 
