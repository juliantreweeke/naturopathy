import React from 'react';
import { Heading, Image, Flex, Box, Text } from 'rebass/styled-components';
import Fade from 'react-reveal/Fade';
import { Container } from '../../components/Container';
import { LAYOUT_MARGIN } from '../../../styleConstants';
import Headshot from '../../../media/images/amanda-headshot-2020.jpg';

const LandingPageAbout = () => (
  <Container maxHeight>
    <Fade>
      <Flex
        px={[20, LAYOUT_MARGIN]}
        textAlign="center"
        justifyContent="center"
        flexWrap="wrap"
      >
        <Box width={[1, 2 / 5]} px={0} pb={2} mb={4}>
          <Image alt="amanda lane" src={Headshot} width={(1, 1, 4 / 5)} />
        </Box>
        <Flex
          width={[1, 3 / 5]}
          px={0}
          pb={2}
          mb={4}
          textAlign="left"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          maxWidth="500px"
          fontSize={[2, 3, 4]}
        >
          <Heading
            textAlign="left"
            color="primary"
            fontSize={5}
            as="h2"
            pb={4}
            width={1}
          >
            Hi! I'm Amanda...
          </Heading>
          <Text as="p" color="primary" pb={4}>
            I help high achieving women particulary Nurses and other healthcare
            workers who are stressed out and struggling with weight gain, poor
            sleep, hormone issues and gut health and ready for real change.
          </Text>
          <Text as="p" color="primary" pb={3}>
            I believe education and knowledge is what empowers my clients to
            make long term positive changes towards optimal health.
          </Text>
        </Flex>
      </Flex>
    </Fade>
  </Container>
);

export default LandingPageAbout;
