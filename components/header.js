class Header extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    // Fetch data from detail-products.json using async/await
    const productData = await fetchProductData();

    // const repositoryName = getRepositoryName();
    this.innerHTML = `
      <style>
      .navbar {
        padding: 0px 32px;
        display: flex;
        position: relative;
        justify-content: space-between;
        align-items: center;
        background-color: var(--primaryColor);
     
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
        transition: transform 0.3s ease-in-out, content 0.3s ease-in-out, font-siz e 0.3s ease-in-out;
        -webkit-transition: transform 0.3s ease-in-out, content 0.3s ease-in-out, font-siz e 0.3s ease-in-out;
        -moz-transition: transform 0.3s ease-in-out, content 0.3s ease-in-out, font-siz e 0.3s ease-in-out;
        -ms-transition: transform 0.3s ease-in-out, content 0.3s ease-in-out, font-siz e 0.3s ease-in-out;
        -o-transition: transform 0.3s ease-in-out, content 0.3s ease-in-out, font-siz e 0.3s ease-in-out;
    }
    
    
    #burger-menu span,
    #burger-menu span:before,
    #burger-menu span:after {
        background: var(--accentColorDark);
        display: block;
        height: 4px;
        opacity: 1;
        position: absolute;
        transition: 0.3s ease-in-out;
    }
    
    #burger-menu span:before,
    #burger-menu span:after {
        content: "";
    }
    
    #burger-menu span {
        right: 0px;
        top: 13px;
        width: 27px;
    }
    
    #burger-menu span:before {
        left: 0px;
        top: -10px;
        width: 16px;
    }
    
    #burger-menu span:after {
        left: 0px;
        top: 10px;
        width: 20px;
    }
    
    #burger-menu.close span {
        transform: rotate(-45deg);
        top: 13px;
        width: 27px;
    }
    
    #burger-menu.close span:before {
        top: 0px;
        transform: rotate(90deg);
        width: 27px;
    }
    
    #burger-menu.close span:after {
        top: 0px;
        left: 0;
        transform: rotate(90deg);
        opacity: 0;
        width: 0;
    }
    
    .search-and-button {
        display: flex;
    }
    
   
.search {
  --input-line: var(--accentColorDark);
  --input-text-color: var(--accentColorGrey);
  --input-text-hover-color: transparent;
  --input-border-color: var(--accentColorDark);
  --input-border-hover-color: var(--secondaryColor);
  --input-bg-color: var(--primaryColor);
  --search-max-width: 250px;
  --search-min-width: 150px;
  --border-radius: 50px;
  --transition-cubic-bezier: 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.search-box {
  max-width: var(--search-max-width);
  min-width: var(--search-min-width);
  height: 50px;
  border: 1px solid var(--input-border-color);
  border-radius: var(--border-radius);
  margin-right: 50px;
  padding: 5px 20px;
  background: var(--input-bg-color);
  transition: var(--transition-cubic-bezier);
}

.search-box:hover {
  border-color: var(--input-border-hover-color);
}

/*Section input*/
.search-field {
  position: relative;
  width: 100%;
  height: 100%;
  left: 2px;
  border: 0;
}

.input {
  width: calc(100% - 29px);
  height: 100%;
  border: 0;
  border-color: transparent;
  font-size: 1rem;
  padding-right: 0px;
  color: var(--input-line);
  background: var(--input-bg-color);
  outline: none;
}

.input::-webkit-input-placeholder {
  color: var(--input-text-color);
}

.input::-moz-input-placeholder {
  color: var(--input-text-color);
}

.input::-ms-input-placeholder {
  color: var(--input-text-color);
}

.input:focus::-webkit-input-placeholder {
  color: var(--input-text-hover-color);
}

.input:focus::-moz-input-placeholder {
  color: var(--input-text-hover-color);
}

.input:focus::-ms-input-placeholder {
  color: var(--input-text-hover-color);
}

/*Search button*/
.search-box-icon {
  width: 52px;
  height: 50px;
  position: absolute;
  top: -6px;
  right: -21px;
  background: transparent;
  transition: var(--transition-cubic-bezier);
  -webkit-transition: var(--transition-cubic-bezier);
  -moz-transition: var(--transition-cubic-bezier);
  -ms-transition: var(--transition-cubic-bezier);
  -o-transition: var(--transition-cubic-bezier);
}


.btn-icon-content {
  width: 52px;
  height: 50px;
  top: -6px;
  right: -10px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: var(--transition-cubic-bezier);
  opacity: .4;
}

.btn-icon-content:hover {
  opacity: .8;
}

.search-icon {
  width: 21px;
  height: 21px;
  position: absolute;
  top: 12px;
  right: 15px;
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

  .search {
      width: 160px;
  }

  .get-started-button {
      padding: 6px 14px;
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


/* End Navbar */
      </style>
      <header>
      <nav class="navbar">
      <div class="brand-title" data-aos="zoom-in" data-aos-duration:"1000">
          <a href="index.html" class="navbar-brand">
              Robin<span class="navbar-brand-teks2">Code</span>
            </a>
      </div>

      <a href="#" id="burger-menu" class="toggle-button">
          <span></span>
      </a>

      <div class="navbar-links" data-aos="zoom-in" data-aos-duration:"1000">
          <ul>
              <li><a href="/index.html" id="homeLink">Home</a></li>
              <li><a href="/views/products.html" id="productsLink">Products</a></li>
              <li><a href="/views/about.html" id="aboutLink">About</a></li>
          </ul>
      </div>

      <div class="search-and-button" data-aos="zoom-in" data-aos-duration:"1000">
      <div class="search">
      <div class="search-box">
        <div class="search-field">
          <input placeholder="Search..." class="input" type="text">
          <div class="search-box-icon">
            <button class="btn-icon-content">
              <i class="search-icon">
                <svg xmlns="://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" fill="#C2C8DA"></path></svg>
              </i>
            </button>
          </div>
        </div>
      </div>
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
        toggleButton.classList.toggle("active");
      });

      var burgerMenu = document.getElementById("burger-menu");
      burgerMenu.addEventListener("click", function () {
        this.classList.toggle("close");
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

    if (currentPage.endsWith("index.html")) {
      homeLink.classList.add("active");
    } else if (currentPage.endsWith("products.html")) {
      productsLink.classList.add("active");
    } else if (currentPage.endsWith("about.html")) {
      aboutLink.classList.add("active");
    }
  }
}

// // Function to extract the repository name from the GitHub Pages URL
// function getRepositoryName() {
//   const currentURL = window.location.href;
//   const parts = currentURL.split('/');
//   const username = parts[3]; // Assuming the username is at this position in the URL
//   const repositoryName = parts[4]; // Assuming the repository name is at this position
//   return `${username}/${repositoryName}`;
// }

customElements.define("header-component", Header);
