fetch("./data/products.json") // Mengambil data dari products.json
.then((response) => {
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
})
  .then((data) => {
    const products = data.products;

    // Membuat instance Swiper setelah data diambil
    const swiper = new Swiper(".swiper", {
      loop: true,
      loopFillGroupWithBlank: true,
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 3,
      coverflowEffect: {
        rotate: 0,
        stretch: 50,
        depth: 200,
        modifier: 1,
        slideShadows: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-right",
        prevEl: ".swiper-button-left",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
          slidesPerView: 1,
          spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
          slidesPerView: 2,
          spaceBetween: 40
      },
      1000: {
          slidesPerView: 3,
          spaceBetween: 30,
      }
      },
    });

    // Mengisi konten slide swiper dengan data dari JSON
    for (let i = 0; i < products.length; i++) {
      const product = products[i];

      // Membuat elemen slide swiper secara dinamis
      const slide = document.createElement("div");
      slide.classList.add("swiper-slide");
      slide.setAttribute("data-product-index", i);

      // Membuat elemen-elemen dalam slide
      const productImageContainer = document.createElement("div");
      productImageContainer.classList.add("product-image");

      const productImage = document.createElement("img");
      productImage.src = product.imageSrc;
      productImage.alt = "Product Image";
      productImage.classList.add("product-image-src");

      const productType = document.createElement("p");
      productType.classList.add("product-type");
      productType.textContent = product["product-type"];

      const exploreButtonContainer = document.createElement("a");
      exploreButtonContainer.href = "./views/products.html";

      const iconButton = document.createElement("button");
      iconButton.classList.add("icon-button");

      const icon = document.createElement("i");
      icon.classList.add("fas", "fa-search");

      const exploreButton = document.createElement("button");
      exploreButton.classList.add("explore-button");
      exploreButton.textContent = "Explore Now!";

      // Menyusun elemen-elemen dalam slide
      iconButton.appendChild(icon);
      exploreButtonContainer.appendChild(iconButton);
      productImageContainer.appendChild(productImage);
      productImageContainer.appendChild(exploreButtonContainer);

      slide.appendChild(productImageContainer);
      slide.appendChild(productType);
      slide.appendChild(exploreButton);

      // Menambahkan slide ke swiper
      swiper.appendSlide(slide);
    }
  })
  

  .catch((error) => {
    console.error("Error fetching data:", error);
  });

  // Mengambil elemen kontainer utama
const container = document.querySelector(".swiper");
// Mengukur lebar layar
const screenWidth = window.innerWidth;

// Mengatur lebar kontainer utama sesuai dengan lebar layar
container.style.maxWidth = `${screenWidth}px`;
