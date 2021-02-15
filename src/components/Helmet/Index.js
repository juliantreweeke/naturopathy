import React from 'react';
import ReactHelmet from 'react-helmet';
import LeafIcon from '../../../media/icons/leaf.png';

const title = 'Amanda Lane Naturopath';
const description = 'Website for Naturopath Amanda Lane';

const profile = {
  favicon16: {
    src: LeafIcon,
  },
  favicon32: {
    src: LeafIcon,
  },
  bigIcon: {
    src: LeafIcon,
  },
  background: '#6b5858',
};

const Helmet = () => (
  <ReactHelmet htmlAttributes={{ lang: 'en' }}>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="shortcut icon" href={profile.favicon32.src} />
    <meta name="theme-color" content={profile.background} />
    <meta name="image" content={profile.favicon32.src} />
    <meta itemProp="name" content={title} />
    <meta itemProp="description" content={description} />
    <meta itemProp="image" content={profile.favicon32.src} />
    <meta name="og:title" content={title} />
    <meta name="og:description" content={description} />
    <meta name="og:image" content={profile.favicon32.src} />
    <meta name="og:site_name" content={title} />
    <meta name="og:locale" content="en_US" />
    <meta name="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={profile.favicon32.src} />
    <meta name="twitter:image:src" content={profile.bigIcon.src} />
    <link rel="apple-touch-icon" sizes="180x180" href={profile.appleIcon} />
    <link rel="icon" type="image/png" sizes="32x32" href={profile.favicon32} />
    <link rel="icon" type="image/png" sizes="16x16" href={profile.favicon16} />
    <script
      src="https://embed.acuityscheduling.com/js/embed.js"
      type="text/javascript"
    />
  </ReactHelmet>
);

export default Helmet;
