class TheHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header>
        <button class="ubb-recipes-logo button--blank">
            <img src="../../assets/svg/logo.svg" alt="UBB Recipes Logo">
        </button>
        <nav>
            <ul>
                <li>
                    <a href="/client/src/home/index.html" >Home</a>
                </li>
                <li>
                    <a href="/client/src/discover-recipes/index.html">Discover</a>
                </li>
                <li>
                    <a href="/client/src/browse-recipe/index.html">Browse</a>
                </li>
                <li>
                    <a href="/client/src/post-recipe/index.html">Post</a>
                </li>
                <li>
                    <a href="/client/src/edit-recipe/index.html">Edit</a>
                </li>
        </nav>
      </header>
    `;
  }
}

customElements.define('the-header', TheHeader);