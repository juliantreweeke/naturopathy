import React from 'react';
import styled from 'styled-components';
import { Text, Box, Flex } from 'rebass/styled-components';
import Fade from 'react-reveal/Fade';
import SocialLink from './SocialLink';
import Logo from './Logo';
import colors from '../../colors';
import Facebook from '../../media/icons/facebook.png';
import Instagram from '../../media/icons/instagram.png';

const FooterContainer = styled.div`
  max-width: 1366px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  @media (max-width: 400px) {
    flex-direction: column-reverse;

    & > * {
      margin-bottom: 10px;
    }
  }
`;

const TextFooter = styled(Text)`
  color: ${(props) => props.theme.colors.primary};

  & a {
    color: ${(props) => props.theme.colors.primary};
    transition: color ease 0.5s;

    &:hover {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

const socialLinks = [
  { 
    name:'Facebook', 
    url: 'https://www.facebook.com/AmandaLaneNaturopathics/',
    image: Facebook
  },
  { 
    name:'Instagram', 
    url: 'https://www.instagram.com/amandathenaturopath/?hl=en',
    image: Instagram
  }
]

const Footer = () => (
  <Box
    p={[2, 3]}
    backgroundColor="white"
    as="footer"
    sx={{
      borderTop: `1px solid ${colors.primary}`,
    }}
  >
    <FooterContainer>
      <Fade left>
        {Logo}
        <TextFooter fontSize={[2, 3]}>Amanda Lane 2020</TextFooter>
      </Fade>
      <Flex>
        <Fade right>
          <Flex flexDirection='row' mx={[2, 3]} fontSize={[1, 3]} >
          {socialLinks.map((data, index) => (
            <SocialLink {...data} color="primary" key={index}/>
            ))}
          </Flex>
        </Fade>
      </Flex>
    </FooterContainer>
  </Box>
);

export default Footer;
