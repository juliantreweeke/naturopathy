import React from 'react';
import { Link } from 'gatsby';
import {
  Button,
  Heading,
  Image,
  Flex,
  Box,
  Text,
} from 'rebass/styled-components';

import FruitBowlImage from '../../../media/images/fruitbowl.jpg';

import Fade from 'react-reveal/Fade';
import { Container } from '../../components/Container';
import { LAYOUT_MARGIN } from '../../../styleConstants';

const CallToAction = () => (
  <Container>
    <Fade>
      <Flex
        px={[null, LAYOUT_MARGIN]}
        textAlign="center"
        justifyContent="center"
        flexWrap="wrap"
      >
        <Flex
          bg="background"
          width={[1, 3 / 5]}
          flexDirection="column"
          justifyContent="center"
          alignItems="space-around"
          p={[4, 5]}
        >
          <Heading as="h2" color="primary" fontSize={[4,5]} pb={[2, 3, 4]}>
            YOUR FREE EBOOK ‘BURNOUT PROOF YOUR BODY’
          </Heading>
          <Text color="primary" fontSize={[2, 3, 4]} pb={[4]}>
            Free 7-day meal plan complete with shopping list, and meal plan.
            Sugar free, gluten free and gauaranteed to support your body.
          </Text>
          <Button
            bg="secondary"
            width={1}
            color="white"
            fontSize={[4]}
            sx={{
              alignSelf: 'flex-end',
            }}
          >
            {/* <Link style={{ color: 'white' }} to="/bookings">
              GET NOW
            </Link> */}
            <a style={{ color: 'white' }} target="_blank" href="https://amandalaneux.ac-page.com/7-day-meal-plan?test=true">
              GET NOW
            </a>
          </Button>
        </Flex>
        <Box bg="background" width={[0, 2 / 5]}>
          <Image src={FruitBowlImage} />
        </Box>
      </Flex>
    </Fade>
  </Container>
);

export default CallToAction;
