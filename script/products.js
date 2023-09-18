// Data produk dalam format JSON
var productData = {
  products: [
    {
      name: "Adicolor Classics Hoodie",
      type: "H&M",
      price: 19.99,
      imageSrc: "../Img/hoodie model.jpg",
      actions: [
        {
          icon: "fas fa-heart",
          action: "Add to Favorites",
        },
        {
          icon: "fas fa-shopping-cart",
          action: "Add to Cart",
        },
      ],
    },
    {
      name: "Blue Jeans",
      type: "Levi's",
      price: 20.5,
      imageSrc: "../Img/jeans model.jpg",
      actions: [
        {
          icon: "fas fa-heart",
          action: "Add to Favorites",
        },
        {
          icon: "fas fa-shopping-cart",
          action: "Add to Cart",
        },
      ],
    },
    {
      name: "Leather-Effect Trench Coat",
      type: "H&M",
      price: 32.15,
      imageSrc: "../Img/coats model.jpg",
      actions: [
        {
          icon: "fas fa-heart",
          action: "Add to Favorites",
        },
        {
          icon: "fas fa-shopping-cart",
          action: "Add to Cart",
        },
      ],
    },
    {
      name: "Quilted Jacket",
      type: "Uniqlo",
      price: 25.85,
      imageSrc: "../Img/jaket model.jpg",
      actions: [
        {
          icon: "fas fa-heart",
          action: "Add to Favorites",
        },
        {
          icon: "fas fa-shopping-cart",
          action: "Add to Cart",
        },
      ],
    },
    {
      name: "Oxford Cotton Shirt",
      type: "Lacoste",
      price: 12.99,
      imageSrc: "../Img/shirt model.jpg",
      actions: [
        {
          icon: "fas fa-heart",
          action: "Add to Favorites",
        },
        {
          icon: "fas fa-shopping-cart",
          action: "Add to Cart",
        },
      ],
    },
    {
      name: "Short Pants Simply Elegant",
      type: "Adidas",
      price: 20.5,
      imageSrc: "../Img/shorts model.jpg",
      actions: [
        {
          icon: "fas fa-heart",
          action: "Add to Favorites",
        },
        {
          icon: "fas fa-shopping-cart",
          action: "Add to Cart",
        },
      ],
    },
    {
      name: "Jacquard Knit Sweater",
      type: "Uniqlo",
      price: 18.25,
      imageSrc: "../Img/sweater model.jpg",
      actions: [
        {
          icon: "fas fa-heart",
          action: "Add to Favorites",
        },
        {
          icon: "fas fa-shopping-cart",
          action: "Add to Cart",
        },
      ],
    },
    {
      name: "Adyant T-Shirts",
      type: "Adidas",
      price: 20.5,
      imageSrc: "../Img/tshirt model.jpg",
      actions: [
        {
          icon: "fas fa-heart",
          action: "Add to Favorites",
        },
        {
          icon: "fas fa-shopping-cart",
          action: "Add to Cart",
        },
      ],
    },
    // Tambahkan lebih banyak objek produk jika diperlukan
  ],
};

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
      showProductDetail(product.name);
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
  productName.className = "products-brand";
  productName.textContent = product.name;

  var productDetails = document.createElement("div");
  productDetails.className = "products-details";

  var productType = document.createElement("p");
  productType.className = "products-type";
  productType.textContent = product.type;

  var productPrice = document.createElement("p");
  productPrice.className = "products-price";
  productPrice.textContent = "$" + product.price;

  productDetails.appendChild(productType);
  productDetails.appendChild(productPrice);

  productInfo.appendChild(productName);
  productInfo.appendChild(productDetails);

  productCard.appendChild(productModel);
  productCard.appendChild(productInfo);

  return productCard;
}

// Memasukkan data produk ke dalam halaman HTML
var productContainer = document.getElementById("product-container");

productData.products.forEach(function (product) {
  var productCard = createProductElement(product);
  productCard.addEventListener("click", function () {
    // Ketika produk diklik, arahkan ke halaman detail produk dengan parameter nama produk
    redirectToDetailPage(product.name);
  });
  productContainer.appendChild(productCard);
});


// Fungsi untuk menampilkan halaman detail produk berdasarkan nama produk yang dipilih
function redirectToDetailPage(productName) {
    // Buat URL tujuan berdasarkan nama produk yang dipilih
    var detailPageURL = "detail-products.html?product=" + encodeURIComponent(productName);
    window.location.href = detailPageURL;
  }

