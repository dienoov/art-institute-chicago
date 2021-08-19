import './css/app.scss';
import './components/nav-bar';
import logo from './images/logo.svg';

const navBar = document.querySelector('nav-bar');
navBar.logo = logo;
navBar.menu = ['Tickets & Visits', 'Art & Stories', 'About', 'Webstore'];
