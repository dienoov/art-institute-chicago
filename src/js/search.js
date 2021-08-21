import './layout';

import axios from 'axios';
import artworksTemplate from '../views/artworks.pug';

const searchDiv = document.getElementById('search');
const keywordSpan = document.getElementById('keyword');
const resultsSpan = document.getElementById('result');

const urlParams = new URLSearchParams(window.location.search);
const keyword = urlParams.get('q');

const artworkFields = ['id', 'title', 'artist_display', 'date_display', 'image_id'].join(',');
const retrieveData = (params) => axios.get(`//api.artic.edu/api/v1/artworks/${params.id}?fields=${artworkFields}`)
  .then(({ data }) => ({
    image_url: `${data.config.iiif_url}/${data.data.image_id}/full/400,/0/default.jpg`,
    ...data.data,
  }));

axios.get(`//api.artic.edu/api/v1/artworks/search?q=${keyword}`)
  .then(async ({ data }) => {
    let artworks = data.data;

    if (artworks.length === 0) {
      const h2 = document.createElement('h2');
      h2.innerText = 'No results found';
      searchDiv.append(h2);
      return;
    }

    artworks.length = artworks.length > 6 ? 6 : artworks.length;
    keywordSpan.innerText = ` "${keyword}"`;
    resultsSpan.innerText = `${data.data.length} Results`;

    artworks = await Promise.all(artworks.map(retrieveData));
    searchDiv.insertAdjacentHTML('beforeend', artworksTemplate({ artworks }));
  });
