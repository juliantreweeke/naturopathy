import React from 'react';
import { Link } from 'rebass/styled-components';
import Tippy from '@tippy.js/react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import 'tippy.js/dist/tippy.css'; // eslint-disable-line
import FacebookIcon from '../../svgs/facebook.svg';

const IconLink = styled(Link)`
  transition: color 0.5s;
  color: ${(props) =>
    props.theme.colors[props.color] || props.theme.colors.primary};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const SocialLink = ({  name, url, color }) => (
  <Tippy content={name} placement="bottom" trigger="mouseenter" arrow={false}>
    <IconLink
      href={url}
      target="_blank"
      color={color}
      rel="noreferrer"
      aria-label={name}
    > 
      <FacebookIcon height={40} />
    </IconLink>
  </Tippy>
);

SocialLink.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default SocialLink;
