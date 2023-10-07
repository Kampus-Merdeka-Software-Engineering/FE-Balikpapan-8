const API_BASE_URL = "https://be-balikpapan-8-production.up.railway.app";
let cachedProductData;

// Fungsi untuk memuat data produk dari API menggunakan fetch
function loadProductData(callback) {
  // Mengambil id produk dari URL
  var productId = getParameterByName("productId");

  // Pastikan productId tidak null sebelum melakukan fetch data
  if (!productId) {
    console.error("Product ID is missing in the URL.");
    return;
  }
  // Jika data produk sudah di-cache, gunakan data tersebut
  if (cachedProductData) {
    callback(cachedProductData);
  } else {
    // Fetch data dari API
    fetch(
      `${API_BASE_URL}/views/detail-products.html?productId=${encodeURIComponent(
        productId
      )}`
    )
      .then(function (response) {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(function (productData) {
        callback(productData.data);
      })
      .catch(function (error) {
        console.error("Error fetching product data:", error);
      });
  }
}
// Fungsi untuk mengisi data produk ke dalam elemen HTML
function populateProductDetails(product) {
  const productImage = document.getElementById("product-image");
  const productName = document.getElementById("product-name");
  const productRating = document.getElementById("product-rating");
  const productPrice = document.getElementById("product-price");
  const productDescription = document.getElementById("product-description");
  const productLongDescription = document.getElementById(
    "product-long-description"
  );
  const productReviews = document.getElementById("product-reviews");
  const sizeDropdown = document.getElementById("size");

  // Mengisi data produk ke dalam elemen HTML
  productImage.src = product.imageSrc;
  productName.textContent = product.name;

  // Membuat tampilan rating berdasarkan rating produk
  const stars = Math.floor(product.rating);
  const halfStar = product.rating % 1 !== 0;
  let ratingHTML = "";
  for (let i = 0; i < stars; i++) {
    ratingHTML += '<i class="fas fa-star"></i>';
  }
  if (halfStar) {
    ratingHTML += '<i class="fas fa-star-half-alt"></i>';
  }
  productRating.innerHTML = ratingHTML;

  productPrice.textContent = `$${product.price}`;
  productDescription.textContent = product.description;
  productLongDescription.textContent = product.description;

  // Mengisi ukuran produk dalam dropdown
  const sizeOptions = product.sizes
    .map((size) => `<option value="${size}">${size}</option>`)
    .join("");
  sizeDropdown.innerHTML = sizeOptions;

  // Mengisi jumlah produk
  const quantityInput = document.getElementById("quantity");
  const decreaseButton = document.getElementById("decrease-button");
  const increaseButton = document.getElementById("increase-button");

  decreaseButton.addEventListener("click", () => {
    const currentQuantity = parseInt(quantityInput.value, 10);
    if (currentQuantity > 1) {
      quantityInput.value = currentQuantity - 1;
    }
  });

  increaseButton.addEventListener("click", () => {
    const currentQuantity = parseInt(quantityInput.value, 10);
    quantityInput.value = currentQuantity + 1;
  });

  // Mengisi ulasan produk
  const reviewsList = product.reviews
    .map((review) => `<li>${review}</li>`)
    .join("");
  productReviews.innerHTML = reviewsList;
}
// Memanggil fungsi untuk mengisi data produk ketika halaman dimuat
window.onload = function () {
  // Memanggil loadProductData untuk mendapatkan data produk dari API
  loadProductData(function (product) {
    if (product) {
      populateProductDetails(product);
    } else {
      // Tampilkan pesan jika produk tidak ditemukan
      alert("Produk tidak ditemukan.");
    }
  });

  // Update the URL without reloading the page
  history.replaceState(null, null, window.location.pathname);
};
// Script Description and review
document
  .getElementById("description-button")
  .addEventListener("click", function () {
    document.querySelector(".box-description").style.display = "block";
    document.querySelector(".box-reviews").style.display = "none";
    document
      .querySelector(".box-menu .menu-button.active")
      .classList.remove("active");
    this.classList.add("active");
  });

document
  .getElementById("reviews-button")
  .addEventListener("click", function () {
    document.querySelector(".box-description").style.display = "none";
    document.querySelector(".box-reviews").style.display = "block";
    document
      .querySelector(".box-menu .menu-button.active")
      .classList.remove("active");
    this.classList.add("active");
  });

// Fungsi untuk mendapatkan nilai parameter dari URL berdasarkan nama parameter
function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
