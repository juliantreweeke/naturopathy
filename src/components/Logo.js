import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Image } from 'rebass/styled-components';
import LogoImage from '../../media/images/logo2.png'

const Logo = (
  <img
    src={LogoImage}
    alt="Amanda Lane Logo"
    style={{
      width: "200px",
      cursor: 'pointer',
    }}
  />
);

export default Logo;
