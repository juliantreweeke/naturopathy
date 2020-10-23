import React from 'react';
import { Heading, Flex, Box, Text } from 'rebass/styled-components';
import { Container } from '../../components/Container';
import ResponsiveImage from '../../components/ResponsiveImage';
import DesktopImage from '../../../media/images/landing_desktop.jpg';
import MobileImage from '../../../media/images/landing_mobile.jpg';


const LandingPage = () => (
  <Container maxHeight>
    <Flex bg="background" flexWrap="wrap">
      <Box width={[1, 2 / 5]} mb={[4, null]}>
        <ResponsiveImage
          desktopImageAlt='Amanda Lane naturopath'
          desktopImageURL={DesktopImage}
          mobileImageAlt='Amanda Lane naturopath'
          mobileImageURL={MobileImage}
        />
      </Box>
      <Flex
        justifyContent="center"
        width={[1, 3 / 5]}
        px={4}
        pb={2}
        mb={[6, 4]}
        sx={{
          flexDirection: 'column',
          alignItems: 'left',
        }}
      >
        <Heading as="h1" color="primary" fontSize={[5,6]} pt={[5, null]} pb={[4]}>
          Amanda Lane Naturopath
        </Heading>
        <Text color="primary" fontSize={[2,3,4]} pb={3}>
        Amanda is a Sydney Based Naturopath and Nutrition coach offering online consultations from the comfort of your own home.
        </Text>
      </Flex>
    </Flex>
  </Container>
);

export default LandingPage;
