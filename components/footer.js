class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
    
footer {
  background-color: var(--accentColorDark);
  color: var(--primaryColor);
  padding: 130px 74px;
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  overflow-x: hidden;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.footer-brand h1 {
  font-size: 40px;
  font-weight: 900;
  letter-spacing: 1.2px;
  margin-bottom: 10px;
}

.footer-brand p {
  color: var(--accentColorGrey);
  font-size: 24px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0.48px;
}

.footer-social {
  display: flex;
  margin-top: 20px;
}

.footer-social a {
  display: inline-block;
  margin-right: 20px;
  text-decoration: none;
  color: var(--accentColorDark);
  background-color: var(--secondaryColor);
  padding: 12px 16px;
  border: 1px solid var(--secondaryColor);
  border-radius: 16px;
  -webkit-border-radius: 16px;
  -moz-border-radius: 16px;
  -ms-border-radius: 16px;
  -o-border-radius: 16px;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
    transform 0.2s ease-in-out;
  transform: scale(1);
}

.footer-social a:hover {
  background-color: transparent;
  color: var(--secondaryColor);
  transform: scale(1.1);
}

.footer-social a:active {
  transform: scale(0.9);
}

.footer-menu {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}

.category {
  margin-right: 20px;
}

.category-catalog-2 {
  margin-top: 38px;
}

.list-menu a {
  position: relative;
}

.list-menu a::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: var(--accentColorGrey);
  bottom: 0;
  left: 0;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.2s ease-in-out;
}

.list-menu a:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.menu-header {
  font-size: 24px;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: 0.48px;
}

.list-menu {
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0.48px;
}

.footer-menu a {
  color: var(--accentColorGrey);
  text-decoration: none;
  transition: color 0.2s ease-in-out;
}

.footer-menu a:hover {
  color: var(--primaryColor);
}

.copyright{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 0px;
  font-size: 18px;
  font-weight: 900;
  color: var(--accentColorDark);
  background-color: var(--secondaryColor)
}

/* Media Queries for Responsive Design */
@media (max-width: 720px) {
footer {
    padding: 80px 24px;
    flex-direction: column;
    text-align: center;
}

.footer-content {
    align-items: center;
}

.footer-brand h1 {
    font-size: 32px; 
}

.footer-brand p {
    font-size: 20px; 
}

.footer-social {
    margin-top: 16px; 
}

.footer-social a {
    margin-right: 12px; 
    padding: 10px 14px;
    font-size: 18px; 
}

.footer-menu {
  text-align: left;
    margin-top: 24px; 
}

.category {
    margin-right: 0;
    margin-bottom: 20px;
}

.category-catalog-2 {
    margin-top: 40px; 
}

.menu-header {
    font-size: 20px; 
}

.list-menu {
    font-size: 18px; 
}
}

@media (min-width: 721px) and (max-width: 1080px) {
footer {
    padding: 100px 40px; 
}

.footer-brand h1 {
    font-size: 36px; 
}

.footer-brand p {
    font-size: 22px; 
}

.footer-social a {
    padding: 12px 16px; 
    font-size: 20px; 
}

.category {
    margin-right: 16px; 
}

.category-catalog-2 {
  margin-left: 30px;
    margin-top: 40px; 
}

.menu-header {
    font-size: 22px; 
}

.list-menu {
    font-size: 20px; 
}
}
    /* End Footer */
  </style>
  <!-- Footer -->
  <footer>
    <div class="footer-content" data-aos="fade-right" data-aos-duration="1000">
      <div class="footer-brand">
        <h1>RobinCode</h1>
        <p>
          Complete your style with <br />
          awesome clothes from us.
        </p>
      </div>
      <div class="footer-social">
        <a href="https://www.facebook.com/"><i class="fab fa-facebook"></i></a>
        <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
        <a href="https://www.twitter.com/"><i class="fab fa-twitter"></i></a>
        <a href="https://www.linkedin.com/"><i class="fab fa-linkedin"></i></a>
      </div>
    </div>

    <div class="footer-menu" data-aos="fade-left" data-aos-duration="1000">
      <div class="category">
        <ul>
          <li class="menu-header">Company</li>
          <ul class="list-menu">
            <li><a href="./about.html">About</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </ul>
      </div>
      <div class="category-catalog-1">
        <ul>
          <li class="menu-header">Catalog</li>
          <ul class="list-menu">
            <li><a href="#">Jeans</a></li>
            <li><a href="#">Hoodie</a></li>
            <li><a href="#">T-Shirt</a></li>
            <li><a href="#">Coat</a></li>
          </ul>
        </ul>
      </div>
      <div class="category-catalog-2">
        <ul class="list-menu">
          <li class="right-align">
            <a href="#">Shorts</a>
          </li>
          <li class="right-align">
            <a href="#">Shirt</a>
          </li>
          <li class="right-align">
            <a href="#">Sweater</a>
          </li>
          <li class="right-align">
            <a href="#">Jacket</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
  <div class="copyright">
  Copyright &copy; 2023 RobinCode
        </div>

  <!-- End Footer -->
      `;

   // Function to load product data
function loadProductData(productType) {
  let url = `${API_BASE_URL}/productsByType`;

  // Append type parameter to the URL if specified
  if (productType) {
    // Construct URL with type parameter
    url += `?type=${encodeURIComponent(productType)}`;
  }

  fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(function (productData) {
      // Update active class on menu item
      updateActiveMenu(productType);

      // Call the function in products.js to display products
      displayProducts(productData.data);
    })
    .catch(function (error) {
      console.error("Error fetching product data:", error);
    });
}

    const catalog1Items = document.querySelectorAll(
      ".category-catalog-1 .list-menu a"
    );
    catalog1Items.forEach((item) => {
      item.addEventListener("click", (event) => {
        event.preventDefault();
        const productType = event.currentTarget.textContent;
        if (productType) {
          window.location.href = `./products.html?type=${encodeURIComponent(
            productType
          )}`;
        }
      });
    });

    const catalog2Items = document.querySelectorAll(
      ".category-catalog-2 .list-menu a"
    );
    catalog2Items.forEach((item) => {
      item.addEventListener("click", (event) => {
        event.preventDefault();
        const productType = event.currentTarget.textContent;
        if (productType) {
          window.location.href = `./products.html?type=${encodeURIComponent(
            productType
          )}`;
        }
      });
    });

    // Function to get product type from the URL
    function getProductTypeFromUrl() {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get("type") || null;
    }

    const initialProductType = getProductTypeFromUrl();
    if (initialProductType) {
      loadProductData(initialProductType);
    }
  }
}
customElements.define("footer-component", Footer);
