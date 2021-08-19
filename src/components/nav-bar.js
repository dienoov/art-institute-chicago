class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set menu(menu) {
    this.navMenu = menu;
    this.render();
  }

  set logo(logo) {
    this.navLogo = logo;
    this.render();
  }

  render() {
    let navItems = '';
    this.navMenu?.forEach((menu) => {
      navItems += `<li class="nav-item"><a href="#" class="nav-link">${menu}</a></li>`;
    });

    this.innerHTML = `
      <nav class="container">
        <a class="logo" href="/"><img src="${this.navLogo}" alt="logo"></a>
        <button class="navbar-toggler"><span></span></button>
        <div class="collapse">
          <ul class="navbar-nav">${navItems}</ul>
        </div>
      </nav>`;
  }
}

customElements.define('nav-bar', NavBar);
