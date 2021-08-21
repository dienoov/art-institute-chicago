import 'regenerator-runtime';
import './css/app.scss';
import './components/nav-bar';
import './components/hero-random';
import './components/latest-exhibitions';
import './components/product-card';
import './components/online-store';

import axios from 'axios';
import logo from './images/logo.svg';

const header = document.querySelector('header');
const navBar = header.querySelector('nav-bar');

navBar.logo = logo;
navBar.menu = [
  { name: 'Home', link: '/' },
  { name: 'Exhibitions', link: '/#exhibitions' },
  { name: 'About', link: '#' },
  { name: 'Webstore', link: '/#webstore' },
];

let prevY;
window.addEventListener('scroll', () => {
  const currentY = window.pageYOffset;
  if (currentY > prevY) header.classList.add('hide');
  else header.classList.remove('hide');
  prevY = currentY;
});

const navCollapse = navBar.querySelector('.collapse');
const navToggler = navBar.querySelector('.navbar-toggler');
const navLinks = navCollapse.querySelectorAll('.nav-link');
const toggleNav = () => {
  navCollapse.classList.toggle('show');
  navToggler.classList.toggle('show');
};

navToggler.addEventListener('click', toggleNav);

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (navCollapse.classList.contains('show')) toggleNav();
  });
});

const heroRandom = document.querySelector('hero-random');
const artworkIds = [
  129884, 28560, 137125, 27992, 229393, 151363, 20684, 117266, 86385, 24306,
  79307, 111628, 24306, 79307, 28067, 24645, 87479, 64818, 80607, 76244,
];
const randomArtworkId = artworkIds[Math.floor(Math.random() * artworkIds.length)];
const artworkFields = ['id', 'title', 'artist_display', 'date_display', 'image_id'].join(',');

axios.get(`//api.artic.edu/api/v1/artworks/${randomArtworkId}?fields=${artworkFields}`)
  .then(({ data }) => {
    heroRandom.artwork = data;
  });

const latestExhibitions = document.querySelector('latest-exhibitions');
const exhibitionsFields = ['id', 'title', 'description', 'image_id', 'image_url'].join(',');

axios.get(`//api.artic.edu/api/v1/exhibitions?fields=${exhibitionsFields}`)
  .then(({ data }) => {
    latestExhibitions.latest = data;
  });

const onlineStore = document.querySelector('online-store');

axios.get('//api.artic.edu/api/v1/products?limit=3')
  .then(({ data }) => {
    onlineStore.products = data.data;
  });

const footer = document.querySelector('footer');
const footerLogo = footer.querySelector('img');
footerLogo.src = logo;
footerLogo.alt = 'logo';
