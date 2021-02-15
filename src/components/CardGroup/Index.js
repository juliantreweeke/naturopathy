import PropTypes from 'prop-types';
import React from 'react';
import styles from './cardGroup.module.css';
import Card from '../Card/Index';

const CardGroup = ({ cards, headingLevel, cardGroupVariant, cardVariant }) => {
  return (
    <section
      className={styles.cardGroupContainer}
      data-variant={cardGroupVariant}
    >
      <div className={styles.cardGroup} data-variant={cardGroupVariant}>
        {cards.map((card, index) => {
          const route = card.slug ? `/blog/${card.slug}` : '';
          return (
            <Card
              cardVariant={cardVariant}
              description={card.description}
              heading={card.heading}
              headingLevel={headingLevel}
              image={card.image}
              key={index}
              to={route}
            />
          );
        })}
      </div>
    </section>
  );
};

CardGroup.propTypes = {
  cardVariant: PropTypes.string,
  cards: PropTypes.array.isRequired,
  headingLevel: PropTypes.string,
};

export default CardGroup;
