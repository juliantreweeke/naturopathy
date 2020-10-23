import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Image } from 'rebass/styled-components';
import LogoImage from '../../media/images/logo2.png'

const Logo = (
  <Image
    src={LogoImage}
    width="200px"
    alt="Amanda Lane Logo"
    style={{
      cursor: 'pointer',
    }}
  />
);

export default Logo;
