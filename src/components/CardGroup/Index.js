import PropTypes from "prop-types"
import React from "react"
import styles from "./cardGroup.module.css"
import Card from "../Card/Index"

const CardGroup = ({ cards }) => {
  return (
      <section className={styles.cardGroupContainer}>
        <div className={styles.cardGroup}>
          {cards.map((card, index) => {
            return (
              <Card
                description={card.description}
                heading={card.heading}
                image={card.image}
                key={index}
                route={card.route}
              />
            )
          })}
          </div>
      </section>
  )
}

CardGroup.propTypes = {
  cards: PropTypes.array.isRequired,
}

export default CardGroup
