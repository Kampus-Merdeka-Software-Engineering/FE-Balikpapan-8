class Header extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    // Fetch data from detail-products.json using async/await
    const productData = await fetchProductData();
    this.innerHTML = `
      <style>
      .navbar {
        padding: 0px 32px;
        display: flex;
        position: relative;
        justify-content: space-between;
        align-items: center;
        background-color: var(--primaryColor);
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        border-bottom: 2px solid #fff;
    }
    
    .brand-title {
        font-size: 2rem;
        margin: 1rem;
        font-weight: 900;
        transition: transform 0.3s ease-in-out;
        -webkit-transition: transform 0.3s ease-in-out;
        -moz-transition: transform 0.3s ease-in-out;
        -ms-transition: transform 0.3s ease-in-out;
        -o-transition: transform 0.3s ease-in-out;
    }
    
    .brand-title a {
        text-decoration: none;
        display: block;
        color: var(--accentColorDark);
    }
    
    .brand-title span {
        color: var(--secondaryColor);
    }
    
    .brand-title:hover {
        transform: scale(1.1);
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -ms-transform: scale(1.1);
        -o-transform: scale(1.1);
    }
    
    .brand-title:active {
        transform: scale(0.9);
        -webkit-transform: scale(0.9);
        -moz-transform: scale(0.9);
        -ms-transform: scale(0.9);
        -o-transform: scale(0.9);
    }
    
    .navbar-links {
        height: 100%;
    }
    
    .navbar-links ul {
        display: flex;
        margin: 0;
        padding: 0;
    }
    
    
    .navbar-links li a {
        font-size: 16px;
        font-weight: 600;
        display: block;
        text-decoration: none;
        color: rgba(0, 0, 0, 0.50);
        margin-right: 60px;
        overflow: hidden;
        position: relative;
        transition: color 0.3s ease;
    }

    .navbar-links li a.active {
      color: var(--accentColorDark);
      border-bottom: 2px solid var(--accentColorDark);
  }
    
    .navbar-links li a:hover {
        color: var(--accentColorDark);
    }
    
    .navbar-links li a::after {
        content: "";
        position: absolute;
        width: 0;
        height: 4px;
        bottom: -2px;
        left: 0;
        background-color: var(--accentColorDark);
        transition: width 0.3s ease;
    }
    
    .navbar-links li a:hover::after {
        width: 100%;
    }
    
    .toggle-button {
        position: absolute;
        top: 1.20rem;
        right: 1rem;
        display: none;
        flex-direction: column;
        justify-content: space-between;
        width: 30px;
        height: 21px;
        transition: transform 0.3s ease-in-out, content 0.3s ease-in-out, font-siz  e 0.3s ease-in-out;
        -webkit-transition: transform 0.3s ease-in-out, content 0.3s ease-in-out, font-siz  e 0.3s ease-in-out;
        -moz-transition: transform 0.3s ease-in-out, content 0.3s ease-in-out, font-siz  e 0.3s ease-in-out;
        -ms-transition: transform 0.3s ease-in-out, content 0.3s ease-in-out, font-siz  e 0.3s ease-in-out;
        -o-transition: transform 0.3s ease-in-out, content 0.3s ease-in-out, font-siz  e 0.3s ease-in-out;
    }
    
    .toggle-button.active::before {
      content: "×";
      font-size: 40px;
      font-weight: bold;
      color: var(--accentColorDark);
      transform: rotate(90deg);
      -webkit-transform: rotate(90deg);
      -moz-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
      -o-transform: rotate(90deg);
  }
  

    .toggle-button .bar {
        height: 3px;
        width: 100%;
        background-color: var(--accentColorDark);
        border-radius: 10px;
    }
    
    .search-and-button {
        display: flex;
    }
    
    .search-container {
        width: 292px;
        height: 50px;
        border-radius: 1000px;
        background: transparent;
        display: flex;
        margin-right: 50px;
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
        cursor: auto;
    }

    .search-container input:active {
      border: 2px solid var(--secondaryColor);
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
        width: 160px;
        height: 50px;
        border: none;
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
        border: 2px solid var(--accentColorDark);
        color: var(--accentColorDark);
        transform: scale(1.05);
        cursor: pointer;
    }
    
    .get-started-button:active {
        transform: scale(0.95);
        transition: transform 0.1s;
    }
    
    /* Responsive Mobile */
    
    @media (max-width: 720px) {
        .navbar {
            padding: 0px;
            flex-direction: column;
            align-items: flex-start;
        }
    
        .toggle-button {
            display: flex;
        }
    
        .navbar-links {
            display: none;
            width: 100%;
        }
    
        .navbar-links ul {
            width: 100%;
            flex-direction: column;
        }
    
        .navbar-links ul li {
            text-align: center;
        }
    
        .navbar-links ul li a {
            padding: .5rem 1rem;
        }
    
        .navbar-links.active {
            display: flex;
        }
    
        .search-and-button {
            display: none;
            width: 100%;
        }
    
        .search-and-button.active {
            padding: 20px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    
        .search-form {
            margin-top: 10px;
        }
    
        .search-container {
            width: 160px;
        }
    
        .get-started-button {
            margin-left: auto;
            width: auto;
        }
    }
    
    /* Responsive Tablet */
    @media (max-width: 1080px) {
      .navbar {
          flex-direction: column;
          align-items: flex-start;
          padding-bottom: 20px;
          width: 100%;
      }
  
      .navbar-links {
          margin-bottom: 1rem;
      }
  }
  
    
    
    }
      
      /* End Navbar */
      </style>
      <header>
      <nav class="navbar">
      <div class="brand-title" data-aos="zoom-in" data-aos-duration:"1000">
          <a href="../views/home.html" class="navbar-brand">
              Robin<span class="navbar-brand-teks2">Code</span>
            </a>
      </div>

      <a href="#" class="toggle-button">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
      </a>

      <div class="navbar-links" data-aos="zoom-in" data-aos-duration:"1000">
          <ul>
              <li><a href="../views/home.html" id="homeLink">Home</a></li>
              <li><a href="../views/products.html" id="productsLink">Products</a></li>
              <li><a href="../views/about.html" id="aboutLink">About</a></li>
          </ul>
      </div>

      <div class="search-and-button" data-aos="zoom-in" data-aos-duration:"1000">
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
      </div>
      
  </nav>

    </header>
      `;
    // Memanggil fungsi untuk mengisi data produk ketika halaman dimuat
    window.onload = function () {
        const toggleButton = document.getElementsByClassName("toggle-button")[0];
        const navbarLinks = document.getElementsByClassName("navbar-links")[0];
        const searchAndButton =
          document.getElementsByClassName("search-and-button")[0];
  
        toggleButton.addEventListener("click", () => {
          navbarLinks.classList.toggle("active");
          searchAndButton.classList.toggle("active");
          toggleButton.classList.toggle('active');
        });

      // Mengambil pathname dari URL untuk menentukan halaman yang sedang diakses
      var pathname = window.location.pathname;

      if (pathname.endsWith("detail-products.html")) {
        // Mengambil nama produk dari URL
        var url = new URL(window.location.href);
        var productName = url.searchParams.get("product");

        if (productName) {
          // Memanggil loadProductData untuk mendapatkan data produk dari detail-products.js
          loadProductData(function (products) {
            var product = products.find((p) => p.name === productName);
            if (product) {
              populateProductDetails(product);
            } else {
              // Tampilkan pesan jika produk tidak ditemukan
              alert("Produk tidak ditemukan.");
            }
          });
        } else {
          alert("Parameter produk tidak ditemukan di URL.");
        }
      }
    };

    // Fetch product data from detail-products.json
    async function fetchProductData() {
      try {
        const response = await fetch("../data/detail-products.json");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const productData = await response.json();
        return productData;
      } catch (error) {
        console.error("Error fetching product data:", error);
        return null;
      }
    }

    // Define an array of menu items
    const menuItems = document.querySelectorAll(".navbar-links li a");

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

    if (currentPage.endsWith("home.html") || currentPage === "/") {
      homeLink.classList.add("active");
    } else if (currentPage.endsWith("products.html")) {
      productsLink.classList.add("active");
    } else if (currentPage.endsWith("about.html")) {
      aboutLink.classList.add("active");
    }
  }
}

customElements.define("header-component", Header);
