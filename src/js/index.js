import './layout';
import '../components/hero-random';
import '../components/latest-exhibitions';
import '../components/online-store';

import axios from 'axios';

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
