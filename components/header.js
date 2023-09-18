class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
      .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--primaryColor);
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        padding: 24px 20px; /* Adjust padding for mobile */
      }
    
      .navbar-brand {
        color: var(--accentColorDark);
        font-size: 25px;
        font-weight: 900;
        text-decoration: none;
        transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
      }
    
      .navbar-brand-teks2 {
        color: var(--secondaryColor);
      }
    
      .navbar-brand:hover {
        transform: scale(1.1);
      }
    
      .navbar-menu {
        display: flex;
        align-items: flex-start;
        gap: 59px;
      }
    
      /* Add an initial horizontal line under the navbar menu items */
      .navbar-menu li a {
        position: relative;
        overflow: hidden;
      }
    
      .navbar-menu li a::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 0;
        height: 2px;
        background-color: var(--accentColorDark);
        transition: width 0.3s ease-in-out;
      }
    
      /* Animate the line width on hover */
      .navbar-menu li a:hover::after {
        width: 100%;
      }
    
      /* Change text color on hover */
      .navbar-menu li a:hover {
        color: var(--accentColorDark);
      }
    
      .navbar-brand:active {
        transform: scale(0.95);
        transition: transform 0.1s;
      }
    
      .search-container {
        width: 292px;
        height: 50px;
        border-radius: 1000px;
        background: transparent;
        display: flex;
        margin-right: 20px;
        position: relative;
        overflow: hidden;
        border: 2px solid var(--accentColorDark);
        transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
      }
    
      .search-input::placeholder {
        color: rgba(0, 0, 0, 0.30);
      }
    
      .search-input {
        border: none;
        width: 100%;
        height: 100%;
        padding-left: 20px;
        background: transparent;
        color: var(--accentColorDark);
        font-size: 16px;
        outline: none;
        cursor: pointer;
      }
    
      .search-container:hover {
        border: 2px solid var(--secondaryColor);
      }
    
      .search-icon {
        font-size: 16px;
        margin: 16px 18px;
        color: var(--accentColorDark);
        opacity: 0.3;
      }
    
      .get-started-button {
        width: 159px;
        height: 50px;
        border-radius: 20px;
        background: var(--accentColorDark);
        color: var(--primaryColor);
        font-size: 18px;
        font-weight: 500;
        transition: background 0.3s, color 0.3s, transform 0.3s, cursor 0.3s;
        cursor: pointer;
      }
    
      .get-started-button:hover {
        background: var(--primaryColor);
        color: var(--accentColorDark);
        transform: scale(1.05);
        cursor: pointer;
      }
    
      .get-started-button:active {
        transform: scale(0.95);
        transition: transform 0.1s;
      }
    
      @media screen and (max-width: 720px) {
        /* Navbar styles for mobile */
        .navbar {
          padding: 10px 20px; /* Reduce padding for mobile */
        }
      
        .navbar-brand {
          font-size: 20px;
          color: var(--accentColorDark); /* Change brand color */
        }
      
        .navbar-menu {
          display: none;
          flex-direction: column;
          position: absolute;
          top: 70px;
          right: 20px;
          background: var(--primaryColor);
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          border-radius: 10px; /* Add border radius */
        }
      
        .navbar-menu.show-mobile {
          display: flex;
        }
      
        .navbar-menu li {
          margin-bottom: 15px; /* Add spacing between mobile menu items */
        }
      
        /* Add a mobile menu toggle button */
        .mobile-menu-toggle {
          display: block;
          font-size: 24px;
          color: var(--accentColorDark);
          cursor: pointer;
        }
      
        /* Change text color on hover */
        .navbar-menu li a:hover {
          color: var(--accentColorDark);
        }
      }
      
    
      @media screen and (min-width: 721px) and (max-width: 1080px) {
        /* Navbar styles for tablet */
        .navbar {
          padding: 24px 72px;
        }
    
        .navbar-brand {
          font-size: 25px;
        }
    
        /* ... (other tablet-specific styles) ... */
      }
      
      /* End Navbar */
      </style>
      <header>
      <nav class="navbar">
        <a href="../views/home.html" class="navbar-brand">
          Robin <span class="navbar-brand-teks2">Code</span>
        </a>
        <span class="mobile-menu-toggle" id="mobileMenuToggle">&#9776;</span>
        <ul class="navbar-menu">
          <li><a href="../views/home.html" id="homeLink">Home</a></li>
          <li><a href="../views/products.html" id="productsLink">Products</a></li>
          <li><a href="../views/about.html" id="aboutLink">About</a></li>
        </ul>
        <div class="search-container">
          <input
            type="text"
            class="search-input"
            id="searchInput"
            placeholder="Search"
          />
          <i class="fas fa-search search-icon" id="searchIcon"></i>
        </div>
        <button class="get-started-button">Get Started</button>
      </nav>
    </header>
      `;
      const mobileMenuToggle = document.getElementById("mobileMenuToggle");
      const navbarMenu = document.querySelector(".navbar-menu");

      mobileMenuToggle.addEventListener("click", () => {
        navbarMenu.classList.toggle("show-mobile");
      });

      // Define an array of menu items
      const menuItems = document.querySelectorAll(".navbar-menu li a");

      // Get the current page URL
      const currentPageURL = window.location.href;

      // Loop through the menu items and check if their href matches the current URL
      menuItems.forEach((menuItem) => {
        const menuItemURL = menuItem.getAttribute("href");

        if (currentPageURL.endsWith(menuItemURL)) {
          menuItem.classList.add("active");
        } else {
          menuItem.classList.remove("active");
        }
      });

      // Add "active" class to the link corresponding to the active page
      const homeLink = document.querySelector("#homeLink");
      const productsLink = document.querySelector("#productsLink");
      const aboutLink = document.querySelector("#aboutLink");

      const currentPage = window.location.pathname;

      if (currentPage.endsWith("home.html")) {
        homeLink.classList.add("active");
      } else if (currentPage.endsWith("products.html")) {
        productsLink.classList.add("active");
      } else if (currentPage.endsWith("about.html")) {
        aboutLink.classList.add("active"); // Corrected from "aboutLink.classList add("active");"
      }
    }
}

customElements.define("header-component", Header);