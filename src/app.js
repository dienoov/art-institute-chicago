import 'regenerator-runtime';
import './css/app.scss';
import './components/nav-bar';
import './components/hero-random';
import './components/latest-exhibitions';

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
heroRandom.heading = 'Art Institute';
heroRandom.subheading = 'Chicago';
heroRandom.slogan = 'One of the world’s major museums';
