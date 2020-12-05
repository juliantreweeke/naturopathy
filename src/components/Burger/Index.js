import PropTypes from "prop-types"
import React from "react"
import styles from "./burger.module.css"

const Burger = ({ ariaLabelId, isMenuOpen, toggleMenuOpen }) => {
  return (
    <button
      aria-labelled-by={ariaLabelId}
      data-is-menu-open={isMenuOpen}
      className={styles.burger}
      onClick={toggleMenuOpen}
      aria-expanded={isMenuOpen} aria-controls="menu"
    >
      <i aria-hidden="true" className={styles.burgerLine}></i>
      <i aria-hidden="true" className={styles.burgerLine}></i>
      <i aria-hidden="true" className={styles.burgerLine}></i>
    </button>
  )
}

Burger.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMenuOpen: PropTypes.node.isRequired,
}

export default Burger
