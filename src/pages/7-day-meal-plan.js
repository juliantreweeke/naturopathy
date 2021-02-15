import React from 'react';
import App from '../components/App/Index';
import CardGroup from '../components/CardGroup/Index';
import ColumnLayout from '../components/ColumnLayout/Index';
import useScript from '../hooks/useScript';
import Heading from '../components/Heading/Index';

import { BurnOutProofData } from '../data';

const customStyles = {
  'backgroundColor': '#F3F7F8',
}

const Headline = () => (
  <> 
    <Heading headingLevel="h1" variant="blue">
      7 day meal plan to support you through times of stress.
    </Heading>
    <p>
      Plant based, sugar free, gluten free, high in essential vitamins and
      minerals.
    </p>
  </>
);

const SignupForm = () => {
  useScript('https://amandalaneux.activehosted.com/f/embed.php?id=1');
  return (
  <>
    <div className="_form_1"></div>
  </>
);}

const MealPlan = () => (
  <App>
    <ColumnLayout style={customStyles} left={<Headline />} right={<SignupForm />} />
    <CardGroup cardVariant="blue" cards={BurnOutProofData.benefits} headingLevel="h2" />
  </App>
);

export default MealPlan;
