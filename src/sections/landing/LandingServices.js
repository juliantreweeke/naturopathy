import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Heading, Image, Flex, Box, Text } from 'rebass/styled-components';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import { useWindowSize } from '../../hooks/useWindowSize';
import Service1 from '../../../media/images/service1.jpg';
import Service2 from '../../../media/images/service2.jpg';
import Service3 from '../../../media/images/service3.jpg';
import Service4 from '../../../media/images/service4.jpg';

const isEven = (num) => {
  return num % 2 === 0;
};

const CardImage = ({ image }) => (
  <Box bg="background" width={[1, 1 / 2]}>
    <Image
      sx={{ height: '100%' }}
      alt={image.description}
      src={image.url}
      width={1}
    />
  </Box>
);

const CardText = ({ heading, paragraph }) => (
  <Flex
    width={[1, 1 / 2]}
    bg="background"
    textAlign={['center', 'left']}
    justifyContent="center"
    flexDirection="column"
    alignItems="center"
    fontSize={[2, 3, 4]}
    minHeight="460px"
  >
    <Box p={[5]}>
      <Heading as="h3" color="primary" fontSize={[4]} pb={[4]}>
        {heading}
      </Heading>
      <Text color="primary" pb={4}>
        {paragraph}
      </Text>
    </Box>
  </Flex>
);

const services = [
  {
    image: { url: Service1, description: 'Support Digestion & Gut health' },
    heading: 'Support Digestion & Gut health',
    paragraph:
      'First we cover off gut health to ensure you are absorbing the vitamins and nutrients from your food. Without this essential step, even the best nutrition won’t be enough!',
  },
  {
    image: { url: Service3, description: 'Healthy Eating & Meal Planning' },
    heading: 'Healthy Eating & Meal Planning',
    paragraph:
      'What does an ideal meal look like? How can I eat more intuitively? I empower women by providing education and support, meal plans and recipes to support your body and help to increase your energy whilst loosing weight.',
  },
  {
    image: { url: Service4, description: 'Mindset & Emotional Wellbeing' },
    heading: 'Mindset & Emotional Wellbeing',
    paragraph:
      'I teach goal setting and stress intervention techniques such as cardiovascular and weight bearing exercise as well as breathing and EFT to help stop stress in it’s tracks and release stress and anxiety. ',
  },
  {
    image: { url: Service2, description: 'Lifes Purpose Training' },
    heading: 'Lifes Purpose Training',
    paragraph:
      'I take you through the steps to uncover your lifes purpose to ensure you’re heading in the right direction and to inspire and motivate you on your journey.',
  },
];

const LandingServices = () => {
  const { isDesktop } = useWindowSize();

  return (
    <Fade>
       <Box width={1}>
       </Box>
      <Heading
        color="primary" 
        fontSize={[4,5]} 
        pt={[5, null]} 
        pb={[6]}
        as="h2"
        textAlign="center"
      >
        The  Nourish Nurse Program - Coming soon!
      </Heading>

      

      {services.map((service, index) => {
        const { paragraph, image, heading } = service;
        return (
          <Flex textAlign="center" justifyContent="center" flexWrap="wrap">
            
            {isEven(index) && isDesktop ? (
              <Fragment>
                <CardImage image={image} />
                <CardText heading={heading} paragraph={paragraph} />
              </Fragment>
            ) : (
              <Fragment>
                <CardText heading={heading} paragraph={paragraph} />
                <CardImage image={image} />
              </Fragment>
            )}
          </Flex>
        );
      })}
    </Fade>
  );
};

export default LandingServices;

CardText.propTypes = {
  paragraph: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
};

CardImage.propTypes = {
  image: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ),
};
