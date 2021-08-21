class HeroRandom extends HTMLElement {
  set artwork(artwork) {
    this.randomArtwork = artwork;
    this.render();
  }

  render() {
    if (!this.randomArtwork) return;

    const artwork = this.randomArtwork.data;

    const url = `${this.randomArtwork.config.iiif_url}/${artwork.image_id}/full/843,/0/default.jpg`;
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
        <h1>Art Institute</h1>
        <h2>Chicago</h2>
        <h3>One of the world’s major museums</h3>
      </div>
      <img src="${url}" alt="random">
      <h3>${desc}</h3>`;
  }
}

customElements.define('hero-random', HeroRandom);
