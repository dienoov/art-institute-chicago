class LatestExhibitions extends HTMLElement {
  set latest(latest) {
    this.latestData = latest;
    this.render();
  }

  render() {
    let i = 0;
    let cards = '';

    const lorem = [
      'Assumenda at dignissimos, doloremque facilis, fugit ipsa ipsam minus, modi nihil odit quam. Esse mollitia necessitatibus obcaecati quaerat quia quos vero.',
      'Aliquid aperiam aspernatur commodi consectetur eligendi facere harum, hic iusto laudantium libero maxime nam numquam officiis optio quod reprehenderit tempore voluptatum.',
      'Amet commodi deleniti dolores, quae quaerat ratione suscipit? Error eum eveniet exercitationem illum nemo nulla optio quae quia quisquam rerum? Eum, voluptates?',
    ];

    this.latestData.data.forEach((exhibition) => {
      if (!(exhibition.image_id || exhibition.image_url)) return;
      if (i === 3) return;

      const url = exhibition.image_url ?? `${this.latestData.config.iiif_url}/${exhibition.image_id}/full/300,/0/default.jpg`;
      const desc = `${(exhibition.description ?? lorem[i]).substr(0, 100)}...`;

      cards += `
        <div class="card">
          <img src="${url}" alt="image">
          <h3>${exhibition.title}</h3>
          <p>${desc}</p>
        </div>`;

      i += 1;
    });

    this.innerHTML = `
      <h2>Exhibitions</h2>
      <div class="container">
        ${cards}
      </div>
    `;
  }
}

customElements.define('latest-exhibitions', LatestExhibitions);
