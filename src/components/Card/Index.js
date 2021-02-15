import PropTypes from 'prop-types';
import React from 'react';
import styles from './card.module.css';
import { Link } from 'gatsby';
import Heading from '../Heading';

const headingStyles = {
  padding: '8px 0px',
  margin:'0px',
  fontSize: '2.2rem',
  lineHeight: '60px',
}

const Card = ({ cardVariant, description, heading, headingLevel, image, ...props}) => {
  const CardContents = (
    <>
      <img className={styles.cardImage} src={image} alt={heading} />
      <div className={styles.cardText}> 
        <Heading variant={cardVariant} headingLevel={headingLevel} style={headingStyles}>
          {heading}
        </Heading>
        <p className={styles.description}>{description}</p>
      </div>
    </>
  );

  const LinkCard = (
    <Link className={styles.cardLink} {...props}>
     {CardContents}
    </Link>
  )

  return (
    <article className={styles.card}>
      { props.to ? LinkCard : CardContents }
    </article>
  );
};

Card.propTypes = {
  cardVariant: PropTypes.string,
  description: PropTypes.string,
  heading: PropTypes.string.isRequired,
  headingLevel: PropTypes.string,
  image: PropTypes.string.isRequired,
};

export default Card;
