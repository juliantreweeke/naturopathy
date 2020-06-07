import React from 'react';
import { Box } from 'rebass/styled-components';
import PropTypes from 'prop-types';
import { Link } from "gatsby"
import colors from '../../colors';

const RouteLink = ({ link, title }) => (
  <Box
    as="li"
    ml={[3, 4]}
    color="primary"
    fontSize={[1, 2, 2, 3]}
    sx={{
        listStyleType:'none',
        '@media screen and (max-width: 639px)': {
          marginLeft:'0px',
          padding:'10px',
          fontSize:'40px',
        }
      }}
  >
    <Link 
      to={`/${link}`}
      activeStyle={{ 
                    borderBottom: `${colors.secondary} 4px solid`,
                  }}
    >
      {title}
    </Link>
  </Box>
);

RouteLink.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default RouteLink;
