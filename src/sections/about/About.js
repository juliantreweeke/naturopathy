import React from 'react';
import { Heading, Image, Flex, Box, Text } from 'rebass/styled-components';
import Fade from 'react-reveal/Fade';
import { Container } from '../../components/Container';
import { LAYOUT_MARGIN } from '../../../styleConstants';
import Headshot from '../../../media/images/amanda-headshot.jpg';

const About = () => (
  <Container>
    <Fade>
      <Flex
        px={[20, LAYOUT_MARGIN]}
        textAlign="center"
        justifyContent="center"
        flexWrap="wrap"
        mt={[4]}
      >
        <Flex
          width={[1, 1, 3 / 5]}
          px={0}
          pb={2}
          mb={4}
          textAlign="left"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          fontSize={[2, 3, 4]}
        >
          <Heading as="h1" color="primary" fontSize={[4, 5]} width={1} pb={[4]}>
            Amanda Lane Sydney Based Naturopath
          </Heading>
          <Text color="primary" pb={4}>
          I’m an Australian Naturopath, Nutrition coach and Registered Nurse offering online consultations globally.
          </Text>
          <Text color="primary" pb={3}>
          I help high achieving women particulary Nurses and other healthcare workers who are stressed out and struggling with weight gain, poor sleep, hormone issues, gut health and ready for real change. I provide an integrative approach to health, liaising with medical and allied health practitioners when appropriate to ensure best health outcomes are achieved.
          </Text>
          <Text color="primary" pb={3}>
          My approach is to identify the root cause of illness. This is done by taking a thorough case history and the use of functional pathology testing, assessing the biochemical individuality of each patient, environmental exposures as well as individual genetic testing if required.
          </Text>
          <Text color="primary" pb={3}>
          Treatment includes a range of modalities including nutrition, herbal medicine, exercise and mindfulness techniques. 
          </Text>
          <Text color="primary" pb={3}>
          I believe education and knowledge is what empowers my clients to make long term positive changes towards optimal health.
          </Text>
          <Text color="primary" pb={3}>
          I have completed a Bachelor of Naturopathy from Nature Care College and a Master of Nursing from Sydney University aswell as a variety of other trainings such as Trauma Informed Care, Life coaching, Lifes Purpose Coaching and Yoga and Meditation trainings in both Australia, India and Thailand.     
          </Text>
          <Text color="primary" pb={3}>
          I am down-to-earth and my approach to holistic health comes with a heavy dose of reality, offering practical and realistic advice.   
          </Text>
          <Text color="primary" pb={3}>
          I have a network of trusted practitioners I can refer to when needed including Integrative GPs, Traditional Chinese Medicine Practitioners, Psychologists, and Physical Therapists.
          </Text>
        </Flex>
        <Box width={[1, 1, 2 / 5]} mb={5}>
          <Image alt="amanda lane" src={Headshot} width={[1, 3 / 4]} />
        </Box>
      </Flex>
    </Fade>
  </Container>
);

export default About;