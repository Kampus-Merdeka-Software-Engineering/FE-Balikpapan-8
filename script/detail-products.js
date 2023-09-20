// Fungsi untuk memuat data produk dari products.json menggunakan fetch
function loadProductData(callback) {
  fetch('../data/products.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (productData) {
      callback(productData.products);
    })
    .catch(function (error) {
      console.error('Error fetching product data:', error);
    });
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
  let ratingHTML = '';
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

  // Mengisi ulasan produk
  const reviewsList = product.reviews
    .map((review) => `<li>${review}</li>`)
    .join("");
  productReviews.innerHTML = reviewsList;
}

// Memanggil fungsi untuk mengisi data produk ketika halaman dimuat
window.onload = function () {
  // Mengambil nama produk dari URL
  var url = new URL(window.location.href);
  var productName = url.searchParams.get("product");

  if (productName) {
    // Memanggil loadProductData untuk mendapatkan data produk dari products.js
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
    // Tampilkan pesan jika parameter produk tidak ada di URL
    alert("Parameter produk tidak ditemukan di URL.");
  }
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
function getParameterByName(name) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(window.location.href);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
