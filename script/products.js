const API_BASE_URL = "mysql://root:ykkhmrdn152833@localhost:3306/robincode";
const productContainer = document.getElementById("product-container");
const menuProducts = document.querySelector(".menu-products");


// Load product data based on type from the URL
loadProductData(getProductTypeFromUrl());

// Add event listener to the menu for filtering
menuProducts.addEventListener("click", function (event) {
  if (event.target.tagName === "A") {
    const productType = event.target.getAttribute("data-filter");

    // Remove the active class from all menu items
    document.querySelectorAll(".menu-products a").forEach(function (item) {
      item.classList.remove("active");
    });

    // Add the active class to the clicked menu item
    event.target.classList.add("active");

    // Load product data based on type
    loadProductData(productType);
  }
});


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

      displayProducts(productData.data);
    })
    .catch(function (error) {
      console.error("Error fetching product data:", error);
    });
}

// Function to update active class on menu item
function updateActiveMenu(productType) {
  document.querySelectorAll(".menu-products a").forEach(function (item) {
    // Remove the active class from all menu items
    item.classList.remove("active");

    // Add the active class to the clicked menu item
    if (item.getAttribute("data-filter") === productType || (productType === null && item.getAttribute("data-filter") === "all")) {
      item.classList.add("active");
    }
  });
}



// Function to create product element from product data
function createProductElement(product) {
  var productCard = document.createElement("div");
  productCard.className = "card-products";

  var productModel = document.createElement("div");
  productModel.className = "products-model";

  var productImage = document.createElement("img");
  productImage.src = product.imageSrc;
  productImage.alt = product.name;

  var hoverIcons = document.createElement("div");
  hoverIcons.className = "hover-icons";

  // Aksi "Add to Favorites"
  var favoritesIcon = document.createElement("i");
  favoritesIcon.className = "fas fa-heart";
  hoverIcons.appendChild(favoritesIcon);

  // Aksi "Add to Cart"
  var cartIcon = document.createElement("i");
  cartIcon.className = "fas fa-shopping-cart";
  hoverIcons.appendChild(cartIcon);

  // Mengubah aksi "View Details" untuk memanggil fungsi showProductDetail
  var viewDetailsAction = {
    icon: "fas fa-info-circle",
    action: "View Details",
    onClick: function () {
      redirectToDetailPage(product.id);
    },
  };


  if (Array.isArray(product.actions)) {
    product.actions.forEach(function (action) {
      var icon = document.createElement("i");
      icon.className = action.icon;

      if (action.onClick) {
        // Jika ada onClick, gunakan fungsi yang diberikan
        icon.addEventListener("click", action.onClick);
      } else {
        // Jika tidak ada onClick, tambahkan link
        var link = document.createElement("a");
        if (action.link) {
          link.href = action.link;
        }
        link.appendChild(icon);
        hoverIcons.appendChild(link);
      }
    });
  }

  // Tambahkan aksi "View Details"
  var icon = document.createElement("i");
  icon.className = viewDetailsAction.icon;
  icon.addEventListener("click", viewDetailsAction.onClick);
  hoverIcons.appendChild(icon);

  productModel.appendChild(productImage);
  productModel.appendChild(hoverIcons);

  var productInfo = document.createElement("div");
  productInfo.className = "products-info";

  var productName = document.createElement("h3");
  productName.className = "products-name";
  productName.textContent = product.name;

  var productDetails = document.createElement("div");
  productDetails.className = "products-details";

  var productBrand = document.createElement("p");
  productBrand.className = "products-brand";
  productBrand.textContent = product.brand;

  var productPrice = document.createElement("p");
  productPrice.className = "products-price";
  productPrice.textContent = "$" + product.price;

  productDetails.appendChild(productBrand);
  productDetails.appendChild(productPrice);

  productInfo.appendChild(productName);
  productInfo.appendChild(productDetails);

  productCard.appendChild(productModel);
  productCard.appendChild(productInfo);

  return productCard;
}

// Function to display products
function displayProducts(products) {
  productContainer.innerHTML = "";
  products.forEach(function (product) {
    const productCard = createProductElement(product);
    productCard.addEventListener("click", function () {
      redirectToDetailPage(product.id);
    });
    productContainer.appendChild(productCard);
  });
}

// Function to filter products based on product type
function filterProducts(products, productType) {
  const filteredProducts = products.filter(function (product) {
    return product.product_type === productType || productType === "all";
  });

  displayProducts(filteredProducts);
}

// Function to redirect to the detail page
function redirectToDetailPage(productId) {
  var detailPageURL = `https://kampus-merdeka-software-engineering.github.io/FE-Balikpapan-8/detail-products.html?productId=${encodeURIComponent(productId)}`;
  window.location.href = detailPageURL;
}


function getProductTypeFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('type') || null;
}

