class OnlineStore extends HTMLElement {
  connectedCallback() {
    this.heading = document.createElement('h2');
    this.container = document.createElement('div');

    this.heading.innerText = 'Online Store';
    this.container.classList.add('container');
  }

  set products(products) {
    this.storeProducts = products;
    this.storeProducts.forEach((product) => {
      const card = document.createElement('product-card');
      card.product = product;
      this.container.append(card);
    });
    this.render();
  }

  render() {
    this.append(this.heading);
    this.append(this.container);
  }
}

customElements.define('online-store', OnlineStore);
