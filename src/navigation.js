import Facebook from '../media/icons/facebook.png';
import Instagram from '../media/icons/instagram.png';
import { MAIL_TO_LINK } from './constants';

export const links = [
  {
    title: 'HOME',
    link: '',
  },
  {
    title: 'ABOUT',
    link: 'about',
  },
  {
    title: 'BOOKINGS',
    link: 'bookings',
  },
  {
    title: 'BLOG',
    link: 'blog',
  },
  {
    title: 'CONTACT',
    href: MAIL_TO_LINK,
  },
];

export const socialMediaLinks = [
  {
    url: 'https://www.facebook.com/AmandaLaneNaturopathics/',
    image: Facebook,
  },
  {
    url: 'https://www.instagram.com/amandathenaturopath/?hl=en',
    image: Instagram,
  },
];
