import React from 'react';
import { Heading, Box } from 'rebass/styled-components';
import App from '../components/App/Index';

const NotFoundPage = () => (
  <App>
    <Box width={[320, 400, 600]} m="auto">
      <Heading
        color="primaryDark"
        fontSize={['9rem', '13rem', '16rem']}
        as="h1"
      >
        404
      </Heading>
      <Heading color="secondary" fontSize={['4rem', '5rem', '6rem']} as="h2">
        There isn&apos;t anything here
      </Heading>
    </Box>
  </App>
);

export default NotFoundPage;
