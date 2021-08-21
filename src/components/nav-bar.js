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
    const logo = this?.navLogo ? `<a class="logo" href="/"><img src="${this.navLogo}" alt="logo"></a>` : '';

    let navItems = '';
    this.navMenu?.forEach((menu) => {
      navItems += `<li class="nav-item"><a href="${menu.link}" class="nav-link">${menu.name}</a></li>`;
    });

    this.innerHTML = `
      <nav class="container">
        ${logo}
        <button class="navbar-toggler"><span></span></button>
        <div class="collapse">
          <ul class="navbar-nav">${navItems}</ul>
        </div>
      </nav>`;
  }
}

customElements.define('nav-bar', NavBar);
