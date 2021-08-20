import 'regenerator-runtime';
import './css/app.scss';
import './components/nav-bar';
import './components/hero-random';
import './components/latest-exhibitions';

import logo from './images/logo.svg';

const navBar = document.querySelector('nav-bar');
navBar.logo = logo;
navBar.menu = ['Tickets & Visits', 'Art & Stories', 'About', 'Webstore'];

const heroRandom = document.querySelector('hero-random');
heroRandom.heading = 'Art Institute';
heroRandom.subheading = 'Chicago';
heroRandom.slogan = 'One of the world’s major museums';
