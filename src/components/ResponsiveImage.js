import React, { Fragment } from 'react';
import { Image } from 'rebass/styled-components';
import PropTypes from 'prop-types';

const ResponsiveImage = ({ desktopImageAlt, desktopImageURL, mobileImageAlt, mobileImageURL }) => (
  <Fragment>
    <Image
      alt={desktopImageAlt}
      src={desktopImageURL}
      width={1}
      display={['none','block']}
    />
    <Image
      alt={mobileImageAlt}
      src={mobileImageURL}
      width={1}
      display={['block','none']}
    />
  </Fragment>
);

ResponsiveImage.propTypes = {
  desktopImageAlt: PropTypes.string.isRequired,
  desktopImageURL: PropTypes.string.isRequired,
  mobileImageAlt: PropTypes.string.isRequired,
  mobileImageURL: PropTypes.string.isRequired,
};

export default ResponsiveImage;
