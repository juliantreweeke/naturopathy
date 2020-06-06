import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Heading, Flex, Box, Text } from 'rebass/styled-components';
import { Container } from '../../components/Container';
import ResponsiveImage from '../../components/ResponsiveImage';

const contentFulQuery = graphql`
query SiteTitleQuery {
  allContentfulLandingPage {
    nodes {
      image {
        file {
          url
        }
        description
      }
      imageMobile {
        file {
          url
        }
        description
      }
      heading
      paragraph
      paragraph2
    }
  }
}
`

const LandingPage = () => ( 
  <Container>
    <StaticQuery
      query={contentFulQuery}
      render={({ allContentfulLandingPage }) => {
        const { image, imageMobile, heading, paragraph,paragraph2 } = allContentfulLandingPage.nodes[0];
        return (
          <Fragment>
            <Flex
              bg="background"
              flexWrap='wrap'
            >
              <Box
                width={[1, 2/5]}
                mb={[4, null]}
              >
                <ResponsiveImage
                  desktopImageAlt={image.description}
                  desktopImageURL={image.file.url}
                  mobileImageAlt={imageMobile.description}
                  mobileImageURL={imageMobile.file.url}
                />
              </Box>
              <Flex
                justifyContent="center"
                width={[1, 3/5]}
                px={4}
                pb={2}
                mb={[6,4]}
                sx={{ 
                      flexDirection: 'column',
                      alignItems:'left'
                      }}
              >
                <Heading
                  as="h1"
                  color="primary"
                  fontSize={[4]}
                  pt={[5,null]}
                  pb={[4]}
                >
                  {heading}
                </Heading>
                <Text color="primary" fontSize={[2]} pb={3}>
                  {paragraph}
                </Text>
                <Text color="primary" fontSize={[2]}>
                  {paragraph2}
                </Text>
              </Flex>
            </Flex>
          </Fragment>
        );
      }}
    />
  </Container>
);

  

export default LandingPage;
