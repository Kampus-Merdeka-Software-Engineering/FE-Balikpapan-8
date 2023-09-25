// Fungsi untuk memuat data produk dari products.json
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

  // Mengubah aksi "View Details" untuk memanggil fungsi showProductDetail
  var viewDetailsAction = {
    icon: "fas fa-info-circle",
    action: "View Details",
    onClick: function () {
      // Menampilkan halaman detail produk dengan parameter nama produk
      redirectToDetailPage(product.name);
    },
  };

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

// Memasukkan data produk ke dalam halaman HTML
var productContainer = document.getElementById("product-container");

// Menggunakan loadProductData untuk memuat data produk dari products.json
loadProductData(function (products) {
  products.forEach(function (product) {
    var productCard = createProductElement(product);
    productCard.addEventListener("click", function () {
      // Ketika produk diklik, arahkan ke halaman detail produk dengan parameter nama produk
      redirectToDetailPage(product.name);
    });
    productContainer.appendChild(productCard);
  });
});

// Fungsi untuk menampilkan halaman detail produk berdasarkan nama produk yang dipilih
function redirectToDetailPage(productName) {
  // Buat URL tujuan berdasarkan nama produk yang dipilih
  var detailPageURL = "detail-products.html?product=" + encodeURIComponent(productName);
  window.location.href = detailPageURL;
}
