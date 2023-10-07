class ArrowBack extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const { username, repositoryName } = getRepositoryName();
      this.innerHTML = `
      <style>
      /* Style for the arrow-back container */
      .arrow-back {
        margin-top: 20px;
        margin-left: 60px;
      }
    
      .arrow-back a .fas {
        font-size: 40px;
        color: var(--accentColorDark);
        transition: all 0.2s ease-in-out;
      }

      .arrow-back a .fas:hover {
        color: var(--secondaryColor);
      }
    
      /* Media query for mobile devices (max-width: 720px) */
      @media (max-width: 720px) {
        .arrow-back {
          margin-top: 10px; /* Adjust the top position for mobile */
          margin-left: 30px; /* Adjust the left position for mobile */
        }
    
        .arrow-back a .fas {
          font-size: 30px; /* Adjust the font size for mobile */
        }
      }
    
      /* Media query for tablets (max-width: 1080px) */
      @media (max-width: 1080px) {
        .arrow-back {
          margin-top: 15px; /* Adjust the top position for tablets */
          margin-left: 45px; /* Adjust the left position for tablets */
        }
    
        .arrow-back a .fas {
          font-size: 35px; /* Adjust the font size for tablets */
        }
      }
    </style>
    <!-- ArrowBack -->
    <div class="arrow-back">
        <a href="/${username}/${repositoryName}views/products.html"><i class="fas fa-arrow-left"></i></a>
    </div>
    <!-- End ArrowBack -->
    
        `;
    }
  }

  function getRepositoryName() {
    const currentURL = window.location.href;
    const parts = currentURL.split('/');
    const username = parts[3];
    const repositoryName = parts[4];
    return { username, repositoryName };
  }
  
  customElements.define("arrow-back", ArrowBack);
  