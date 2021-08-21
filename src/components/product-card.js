class ProductCard extends HTMLElement {
  constructor() {
    super();

    this.card = document.createElement('div');
    this.name = document.createElement('h3');
    this.img = document.createElement('img');
    this.price = document.createElement('div');

    this.card.classList.add('card');
    this.img.setAttribute('alt', 'product');

    this.card.append(this.img, this.name, this.price);
  }

  set product(product) {
    this.cardProduct = product;
    this.name.innerText = this.cardProduct.title;
    this.img.src = this.cardProduct.image_url;
    this.price.innerHTML = this.cardProduct.price_display;
    this.render();
  }

  render() {
    this.append(this.card);
  }
}

customElements.define('product-card', ProductCard);
