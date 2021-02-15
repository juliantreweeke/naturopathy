import React from 'react';
import App from '../components/App/Index';
import ColumnLayout from '../components/ColumnLayout/Index';
import Heading from '../components/Heading/Index';
import AmandaImage from '../../media/images/amanda-about-me.jpg';

const Content = () => (
  <>
    <Heading headingLevel="h1" style={{ fontSize: '2.4rem' }}>Amanda Lane Sydney Based Naturopath</Heading>
    <p>
      I’m an Australian Naturopath, Nutrition coach and Registered Nurse
      offering online consultations globally.
    </p>

    <p>
      I love to help high acheiving women particulary Nurses and other
      healthcare workers who are stressed out to manage their stress and avoid
      full-blown burnout. I provide an integrative approach to your health,
      liaising with medical and allied health practitioners when appropriate to
      ensure best health outcomes are achieved.
    </p>

    <p>
      My approach is to identify the root cause of illness. This is done by
      taking a thorough case history and often the use of functional pathology
      testing, assessing the biochemical individuality of each patient,
      assessing environmental exposures as well as individual genetic testing if
      required.
    </p>

    <p>
      Treatment includes a range of modalities including nutrition, herbal
      medicine, exercise, EFT and mindfulness techniques.
    </p>

    <p>
      I believe education and knowledge is what empowers my clients to make long
      term positive changes towards optimal health.
    </p>

    <p>
      I have completed a Bachelor of Naturopathy from Nature Care College and a
      Master of Nursing from Sydney University aswell as a variety of other
      trainings such as Emotional Freedom Technique, Trauma Informed Care, Lifes
      Purpose Coaching and Yoga and Meditation trainings in both Australia,
      India and Thailand.
    </p>

    <p>
      I have a network of trusted practitioners I can refer to when needed
      including Integrative GPs, Traditional Chinese Medicine Practitioners,
      Psychologists, and Physical Therapists.
    </p>
  </>
);

const Image = () => <img src={AmandaImage} alt="amanda lane naturopath" />;

const AboutPage = () => (
  <App>
    <ColumnLayout left={<Content/>} right={<Image/>} />
  </App>
);

export default AboutPage;
