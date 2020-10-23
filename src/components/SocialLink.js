import React from 'react';
import { Image, Link } from 'rebass/styled-components';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import 'tippy.js/dist/tippy.css'; // eslint-disable-line
import FacebookIcon from '../../svg/facebook.svg';

const IconLink = styled(Link)`
  transition: color 0.5s;
  color: ${(props) =>
    props.theme.colors[props.color] || props.theme.colors.primary};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const SocialLink = ({  name, url, color, image }) => {
  
 return (
     <IconLink
      href={url}
      target="_blank"
      color={color}
      rel="noreferrer"
      aria-label={name}
      px={1}
    >   
    <Image 
      alt={name} src={image} 
      style={{ width:'50px'}}
    />  
    
      {/* TODO Gatsby SVG's are breaking for some reason
      need to figure out why and replace with SVG's <FacebookIcon height={40} /> */}
    </IconLink> 
);}

SocialLink.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default SocialLink;

