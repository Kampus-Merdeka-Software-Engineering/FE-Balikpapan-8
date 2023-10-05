const API_BASE_URL = "https://be-balikpapan-8-production.up.railway.app";
const productContainer = document.getElementById("product-container");

function loadProductData(callback) {
  fetch(`${API_BASE_URL}/views/products`)
    .then(function (response) {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(function (productData) {
      console.log("Product data from server:", productData);
      callback(productData.data); // Use productData.data to access the array of products
    })
    .catch(function (error) {
      console.error("Error fetching product data:", error);
    });
}

// Fungsi untuk membuat elemen produk HTML dari data JSON
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
      // Menampilkan halaman detail produk dengan parameter nama produk
      redirectToDetailPage(product.id);
    },
  };

  // Make sure product.actions is an array before using forEach
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

// Fungsi untuk menampilkan halaman detail produk berdasarkan id produk yang dipilih
function redirectToDetailPage(productId) {
  // Buat URL tujuan berdasarkan id produk yang dipilih
  var detailPageURL = `detail-products.html?productId=${encodeURIComponent(
    productId
  )}`;
  window.location.href = detailPageURL;
}

// Menggunakan loadProductData untuk memuat data produk dari database
loadProductData(function (products) {
  if (Array.isArray(products)) {
    products.forEach(function (product) {
      var productCard = createProductElement(product);
      productCard.addEventListener("click", function () {
        redirectToDetailPage(product.id);
      });
      productContainer.appendChild(productCard);
    });
  } else {
    console.error("Expected an array of products, but received:", products);
  }
});
