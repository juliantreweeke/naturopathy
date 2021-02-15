import PropTypes from "prop-types"
import React from "react"
import styles from "./burger.module.css"

const Burger = ({ ariaLabel, isMenuOpen, toggleMenuOpen }) => {
  return (
    <button
      aria-label={ariaLabel}
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
  ariaLabel: PropTypes.string.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMenuOpen: PropTypes.func.isRequired,
}

export default Burger
