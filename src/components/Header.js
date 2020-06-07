import React from 'react';
import Headroom from 'react-headroom';
import { Box, Button, Flex } from 'rebass/styled-components';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import { Link } from "gatsby"
import MenuDropDown from './MenuDropdown';
import RouteLink from './RouteLink';
import Logo from './Logo';
import { LAYOUT_MARGIN } from '../../styleConstants';

const HeaderContainer = styled(Headroom)`
  .headroom--pinned {
    background: ${(props) => props.theme.colors.white};
  }
  background:${(props) => props.theme.colors.white};;
  position: relative;
  width: 100%;
  height:80px;
`;

const CTA = ({ link, title }) => (
  <Button variant='secondary'>
    <Link style={{ color: 'white' }} to={`/${link}`}>{title}</Link>
  </Button>
)

const Header = ({ links, mobileMenuState }) => {

  const navLinks = links.map(({ title, link }) => (
    <RouteLink
      key={title}
      link={link}
      title={title}
      selected={false}
    />
  ));

  return (
    <HeaderContainer>
      <Fade top>
        <Box
          as="nav"
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          p={3}
          mx={[0, 0, LAYOUT_MARGIN]}
          role="navigation"
          display={['none','flex']}
        > 
          {Logo}
          <Flex as='ul' mr={[0, 3, 5]}>{navLinks}</Flex> 
          <CTA link="bookings" title="BOOK NOW" />
        </Box>
        <Box
          as="nav"
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          p={3}
          mx={[0, 0, LAYOUT_MARGIN]}
          role="navigation"
          display={['flex','none']}
        >
          {Logo}
          <MenuDropDown navLinks={navLinks} mobileMenuState={mobileMenuState} />
          <CTA link="bookings" title="BOOK NOW" />
        </Box>
      </Fade>
    </HeaderContainer>
  );
}

CTA.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Header.propTypes = {
  mobileMenuState: PropTypes.objectOf(
    PropTypes.shape({
      mobileMenuOpen: PropTypes.bool,
      toggleMobileMenu: PropTypes.func,
    })
  ),
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      title: PropTypes.number,
    })
  ),
};

export default Header;


