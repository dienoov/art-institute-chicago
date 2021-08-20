import axios from 'axios';

class HeroRandom extends HTMLElement {
  async connectedCallback() {
    const id = [
      129884, 28560, 137125, 27992, 229393, 151363, 20684, 117266, 86385, 24306,
      79307, 111628, 24306, 79307, 28067, 24645, 87479, 64818, 80607, 76244,
    ];
    const randomId = id[Math.floor(Math.random() * id.length)];
    const fields = ['id', 'title', 'artist_display', 'date_display', 'image_id'].join(',');

    this.random = await axios.get(`//api.artic.edu/api/v1/artworks/${randomId}?fields=${fields}`);

    this.render();
  }

  set heading(heading) {
    this.heroHeading = heading;
    this.render();
  }

  set subheading(subheading) {
    this.heroSubheading = subheading;
    this.render();
  }

  set slogan(slogan) {
    this.heroSlogan = slogan;
    this.render();
  }

  render() {
    if (!this.random) return;

    const artwork = this.random.data.data;

    const url = `${this.random.data.config.iiif_url}/${artwork.image_id}/full/843,/0/default.jpg`;
    const desc = `${artwork.title.substr(0, 32)}<br>${artwork.date_display}`;

    this.innerHTML = `
      <style>
        h1 {
          background: url(${url});
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
        }
      </style>
      <div class="container">
        <h1>${this.heroHeading}</h1>
        <h2>${this.heroSubheading}</h2>
        <h3>${this.heroSlogan}</h3>
      </div>
      <img src="${url}" alt="random">
      <h3>${desc}</h3>`;
  }
}

customElements.define('hero-random', HeroRandom);
