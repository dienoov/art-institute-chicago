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
    const logo = this?.navLogo ? `<a class="logo" href="index.html"><img src="${this.navLogo}" alt="logo"></a>` : '';

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
          <form action="search.html">
            <input type="text" name="q" placeholder="Search Artworks" required>
            <button type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="14">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
              </svg>
            </button>
          </form>
        </div>
      </nav>`;
  }
}

customElements.define('nav-bar', NavBar);
