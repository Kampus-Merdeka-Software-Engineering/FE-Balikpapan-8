// Data produk dalam format JSON
var productData = {
    products: [
      {
        name: "Adicolor Classics Hoodie",
        rating: 4.5,
        price: 19.99,
        description:
          "The Adicolor Classics Hoodie is a versatile and stylish addition to your wardrobe. Crafted with care, this hoodie offers both comfort and durability. Its classic design and premium finish make it a timeless choice. Whether you're going for a casual look or layering up for colder weather, this hoodie has got you covered.",
        sizes: ["Small", "Medium", "Large", "Extra Large"],
        imageSrc: "../Img/hoodie model.jpg",
        reviews: [
          "This hoodie is incredibly comfortable and durable. I love its simple yet stylish design. It's perfect for chilly weather.",
          "The Adicolor Classics Hoodie is a must-have. It's soft, warm, and the fit is just right. Highly recommended!",
          "I'm really impressed with the quality of this hoodie. It's worth every penny.",
          // Add more reviews if needed
        ],
      },
      {
        name: "Blue Jeans",
        rating: 4.2,
        price: 20.5,
        description:
          "Our Blue Jeans are a classic choice for any wardrobe. Made by Levi's, these jeans offer both style and comfort. The timeless blue denim pairs well with a variety of outfits, making it a versatile addition to your collection.",
        sizes: ["28W", "30W", "32W", "34W"],
        imageSrc: "../Img/jeans model.jpg",
        reviews: [
          "I've been wearing these jeans for years, and they never disappoint. Comfortable fit and durable.",
          "The Blue Jeans by Levi's are my go-to choice. Great quality and stylish.",
          "These jeans are a great value for the price. I highly recommend them.",
          // Add more reviews if needed
        ],
      },
      {
        name: "Leather-Effect Trench Coat",
        rating: 4.7,
        price: 32.15,
        description:
          "Stay elegant and warm with our Leather-Effect Trench Coat from H&M. This coat features a classic design with a modern twist. It's perfect for both formal and casual occasions, and its leather-effect finish adds a touch of sophistication.",
        sizes: ["Small", "Medium", "Large", "Extra Large"],
        imageSrc: "../Img/coats model.jpg",
        reviews: [
          "I absolutely love this trench coat. It's stylish, comfortable, and keeps me warm.",
          "The Leather-Effect Trench Coat is a great addition to my wardrobe. It looks much more expensive than it is.",
          "H&M did a great job with this coat. The quality is impressive.",
          // Add more reviews if needed
        ],
      },
      {
        name: "Quilted Jacket",
        rating: 4.5,
        price: 25.85,
        description:
          "Stay warm and stylish with our Quilted Jacket from Uniqlo. This jacket is designed to provide both comfort and fashion. Whether you're heading out for a casual day or need an extra layer in colder weather, this jacket is a versatile choice.",
        sizes: ["Small", "Medium", "Large", "Extra Large"],
        imageSrc: "../Img/jaket model.jpg",
        reviews: [
          "I love this jacket. It's warm and fits perfectly.",
          "The Quilted Jacket by Uniqlo is a great addition to my wardrobe. It's stylish and comfortable.",
          "I highly recommend this jacket. It's a great value for the price.",
          // Add more reviews if needed
        ],
      },
      {
        name: "Oxford Cotton Shirt",
        rating: 4.0,
        price: 12.99,
        description:
          "Our Oxford Cotton Shirt from Lacoste is a classic choice for a polished look. Made with pure cotton, this shirt offers both comfort and style. Whether you're dressing up for a formal occasion or going for a smart-casual look, this shirt is a versatile option.",
        sizes: ["Small", "Medium", "Large", "Extra Large"],
        imageSrc: "../Img/shirt model.jpg",
        reviews: [
          "This shirt is comfortable and looks great.",
          "The Oxford Cotton Shirt by Lacoste is a quality product. I'm satisfied with my purchase.",
          "I've been wearing this shirt for years, and it never disappoints.",
          // Add more reviews if needed
        ],
      },
      {
        name: "Short Pants Simply Elegant",
        rating: 4.2,
        price: 20.5,
        description:
          "Stay comfortable and stylish with our Short Pants Simply Elegant from Adidas. These shorts offer a perfect fit and a modern design. Whether you're hitting the gym or just lounging at home, these shorts are a great choice.",
        sizes: ["Small", "Medium", "Large", "Extra Large"],
        imageSrc: "../Img/shorts model.jpg",
        reviews: [
          "These shorts are incredibly comfortable. I wear them for workouts and leisure.",
          "The Short Pants Simply Elegant by Adidas are my favorite shorts. Great fit and quality.",
          "I highly recommend these shorts. They are worth every penny.",
          // Add more reviews if needed
        ],
      },
      {
        name: "Jacquard Knit Sweater",
        rating: 4.4,
        price: 18.25,
        description:
          "Keep warm and stylish with our Jacquard Knit Sweater from Uniqlo. This sweater features a classic design with a modern twist. It's perfect for chilly days and evenings. Stay cozy and fashionable with this sweater.",
        sizes: ["Small", "Medium", "Large", "Extra Large"],
        imageSrc: "../Img/sweater model.jpg",
        reviews: [
          "I love this sweater. It's warm and looks great.",
          "The Jacquard Knit Sweater by Uniqlo is a quality product. I'm satisfied with my purchase.",
          "I've been wearing this sweater for years, and it never disappoints.",
          // Add more reviews if needed
        ],
      },
      {
        name: "Adyant T-Shirts",
        rating: 4.1,
        price: 20.5,
        description:
          "Adyant T-Shirts by Adidas are a perfect addition to your casual wardrobe. Made with high-quality materials, these shirts are both comfortable and stylish. Whether you're running errands or meeting friends, these t-shirts offer a great look and feel.",
        sizes: ["Small", "Medium", "Large", "Extra Large"],
        imageSrc: "../Img/tshirt model.jpg",
        reviews: [
          "These t-shirts are comfortable and stylish. I wear them regularly.",
          "The Adyant T-Shirts by Adidas are my go-to choice. Great fit and quality.",
          "I highly recommend these t-shirts. They are worth every penny.",
          // Add more reviews if needed
        ],
      },
      // Tambahkan produk lainnya dari products.json di sini
    ],
  };
  

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
  
  console.log("productName dari URL:", productName); // Tambahkan ini
  
  if (productName) {
    var product = productData.products.find((p) => p.name === productName);
    console.log("Produk yang ditemukan:", product); // Tambahkan ini
    if (product) {
      populateProductDetails(product);
    } else {
      // Tampilkan pesan jika produk tidak ditemukan
      alert("Produk tidak ditemukan.");
    }
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