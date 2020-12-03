import PropTypes from 'prop-types';
import React from 'react';
import styles from './card.module.css';
import { Link } from 'gatsby';

const Card = ({ description, heading, image, route }) => {
  const Cardcontents = (
    <> 
     <img className={styles.cardImage} src={image} alt={heading} />
     <h4 className={styles.heading}>{heading}</h4>
     <p className={styles.description}>{description}</p>
    </>
  );

  const LinkCard = (
    <Link className={styles.cardLink} to={`/${route}`}>
     {Cardcontents}
    </Link>
  )

  return (
    <div className={styles.card}>
      {route ? LinkCard : Cardcontents }
    </div>
  );
};

Card.propTypes = {
  description: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  route: PropTypes.string,
};

export default Card;
