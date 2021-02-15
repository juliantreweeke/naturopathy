import React from 'react';
import App from '../components/App/Index';
import Heading from '../components/Heading/Index';
import Button from '../components/Button/Index';
import CardGroup from '../components/CardGroup/Index';
import ImageTextBlock from '../components/ImageTextBlock/Index';
import ImageFloatingTextBlock from '../components/ImageFloatingTextBlock/Index';
import Stack from '../components/Stack/Index';
import IFrameSignUpForm from '../components/IFrameSignUpForm/Index';
import Container from '../components/Container/Index';
import LandingImage from '../../media/images/AmandaLane-Kitchen-min.jpg';
import EBookImage from '../../media/images/e-book-cover.png';
import MeditationImage from '../../media/images/meditation.jpg';
import MealPlanImage from '../../media/images/mealplan.jpg';
import FillerImage from '../../media/images/blog-image.jpg';
import { MAIL_TO_LINK } from '../constants';
import { graphql } from 'gatsby';

const fillerCourseData = [
  { heading: 'Nourished Nurse Program', image: FillerImage, route: '/' },
  { heading: 'Emotional Freedom Technique', image: FillerImage, route: '/' },
  { heading: '1:1 Package with Amanda', image: FillerImage, route: '/' },
  { heading: 'Personalised Meal Plans', image: FillerImage, route: '/' },
];

//TODO replace this with custom SignUpForm component
// const SignUpForm = () => {
//   useScript(ACTIVE_CAMPAIGN_IFRAME_FORM);
//   return (
//     <>
//       <div className="_form_1"></div>
//     </>
//   );
// };

export const homeBlogQuery = graphql`
  query HomeBlogQuery {
    allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
      nodes {
        slug
        heading
        image {
          file {
            url
          }
        }
      }
    }
  }
`;

const Home = ({ data }) => {
  const { nodes } = data.allContentfulBlogPost;

  const blogPosts = nodes.map((node) => {
    return {
      ...node,
      image: node.image.file.url,
    };
  });

  return (
    <App fullWidth>
      <Stack gutter="44">
        <ImageFloatingTextBlock image={LandingImage}>
          <Heading headingLevel="h1">Hi! I'm Amanda</Heading>
          <p>
            I help Nurses manage stress through holistic health & wellbeing.
          </p>
          <Button href={MAIL_TO_LINK}>WORK WITH ME</Button>
        </ImageFloatingTextBlock>
        {/* TODO replace this with custom SignUpForm component */}
        {/* <ImageTextBlock imageRight={EBookImage}>
      <Heading headingLevel="h2" style={{ fontSize: '3.4rem' }}>
        Here’s a little freebie
      </Heading>
        <p>
          Everything you need to know about eating mindfully to improve your digestion, manage bloat and weight.
        </p>
      <SignUpForm />
    </ImageTextBlock> */}
        <Container>
          <ImageTextBlock imageLeft={MeditationImage}>
            <Heading headingLevel="h2" style={{ fontSize: '3.4rem' }}>
              Reduce stress, improve your sleep, loose weight, feel yourself
              again..
            </Heading>
            <p>
              I help high acheiving women particulary Nurses and other
              healthcare workers who are stressed out and struggling with weight
              gain, poor sleep, hormone issues and gut health and ready for real
              change.
            </p>
            <p>
              I believe education and knowledge is what empowers my clients to
              make long term positive changes towards optimal health.
            </p>
          </ImageTextBlock>

          {/* TODO Replace with real data */}
          {/* <section className="full">
            <Heading headingLevel="h2" style={{ fontSize: '3.4rem' }}>
              Are you ready to feel stress free and full of energy again?
            </Heading>
            <CardGroup
              cardGroupVariant
              cardVariant="black"
              cards={fillerCourseData}
              headingLevel="h2"
            />
          </section> */}

          <ImageTextBlock imageRight={MealPlanImage}>
            <Heading headingLevel="h2" style={{ fontSize: '3.4rem' }}>
              Have you signed up for your free meal plan?
            </Heading>
            <p>
              7 day meal plan to burn-out proof your body! Complete with planner
              and shopping lists.
            </p>
            <IFrameSignUpForm />
          </ImageTextBlock>
          <section className="full">
            <Heading headingLevel="h2" style={{ fontSize: '3.4rem' }}>
              From the blog
            </Heading>
            <CardGroup
              cardGroupVariant
              cardVariant="black"
              cards={blogPosts}
              headingLevel="h2"
            />
          </section>
        </Container>
      </Stack>
    </App>
  );
};

export default Home;
