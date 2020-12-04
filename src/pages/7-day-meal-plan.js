import React from 'react';
import Layout from '../components/Layout';
import CardGroup from '../components/CardGroup/Index';
import ColumnLayout from '../components/ColumnLayout/Index';
import useScript from '../hooks/useScript';

import { BurnOutProofData } from '../data';

const Headline = () => (
  <>
    <h1>7 day meal plan to support you through times of stress.</h1>
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
  <Layout>
    <ColumnLayout left={<Headline />} right={<SignupForm />} />
    <CardGroup cards={BurnOutProofData.benefits} />
  </Layout>
);

export default MealPlan;
