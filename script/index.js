const API_BASE_URL = "mysql://root:ykkhmrdn152833@localhost:3306/robincode";

fetch(`${API_BASE_URL}/index`) // Fetch data from API endpoint
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    const products = data.data || [];

    // Create swiper instance after data is fetched
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
          spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });

    // Populate swiper slides with data from API
    for (let i = 0; i < products.length; i++) {
      const product = products[i];

      // Create swiper slide element dynamically
      const slide = document.createElement("div");
      slide.classList.add("swiper-slide");
      slide.setAttribute("data-product-index", i);

      // Create elements inside slide
      const productImageContainer = document.createElement("div");
      productImageContainer.classList.add("product-image");

      const productImage = document.createElement("img");
      productImage.src = product.imageSrc;
      productImage.alt = "Product Image";
      productImage.classList.add("product-image-src");

      const productType = document.createElement("p");
      productType.classList.add("product-type");
      productType.textContent = product.product_type;

      // Create link for Explore button based on product type
      const exploreButtonContainer = document.createElement("a");
      exploreButtonContainer.href = `./products.html?type=${encodeURIComponent(
        product.product_type
      )}`;

      const iconButton = document.createElement("button");
      iconButton.classList.add("icon-button");

      const icon = document.createElement("i");
      icon.classList.add("fas", "fa-search");

      const exploreButton = document.createElement("button");
      exploreButton.classList.add("explore-button");
      exploreButton.textContent = "Explore Now!";

      // Add event listener to exploreButton
      exploreButton.addEventListener("click", function () {
        // Get the data-product-index attribute from the parent slide
        const productIndex = exploreButton
          .closest(".swiper-slide")
          .getAttribute("data-product-index");

        // Get the product based on the index
        const product = products[parseInt(productIndex)];

        // Redirect to the products page with the product type
        window.location.href = `./products.html?type=${encodeURIComponent(
          product.product_type
        )}`;
      });

      // Add event listener to exploreButtonContainer
      exploreButtonContainer.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = exploreButtonContainer.href;
      });

      // Assemble elements inside slide
      iconButton.appendChild(icon);
      exploreButtonContainer.appendChild(iconButton);
      productImageContainer.appendChild(productImage);
      productImageContainer.appendChild(exploreButtonContainer);

      slide.appendChild(productImageContainer);
      slide.appendChild(productType);
      slide.appendChild(exploreButton);

      // Add slide to swiper
      swiper.appendSlide(slide);
    }
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// Get main container element
const container = document.querySelector(".swiper");

// Get screen width
const screenWidth = window.innerWidth;

// To make the container responsive, set the max-width of the container to the screen width
container.style.maxWidth = `${screenWidth}px`;


// Handle form submission
const form = document.querySelector("#contact-form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Mendefinisikan data formulir dengan struktur yang diinginkan
  const formData = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    message: document.querySelector("#message").value,
  };

  try {
    // Mengirimkan data formulir ke server menggunakan endpoint API
    const response = await fetch(`${API_BASE_URL}/index`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
    console.log("Form data sent successfully:", responseData);

    // Menampilkan pesan pop-up menggunakan Sweet Alert dengan gaya sesuai web e-commerce
    Swal.fire({
      icon: "success",
      title: "Thank You!",
      text: "Your message has been successfully sent! We appreciate your awesome feedback to Thrift Fashion Robincode. Get ready for something exciting!",
      customClass: {
        popup: "robin-swal-popup", // Sesuaikan dengan nama kelas CSS yang diinginkan
        title: "robin-swal-title",
        content: "robin-swal-content",
        confirmButton: "robin-swal-confirm-button",
      },
      buttonsStyling: false,
      showConfirmButton: true,
      confirmButtonText: "OK",
      timer: 10000,
    });

    // Melakukan sesuatu dengan data respons jika diperlukan
    const formId = responseData.formId;
    // Gunakan formId sesuai kebutuhan

    // Reset formulir setelah pengiriman yang berhasil
    form.reset();
  } catch (error) {
    console.error("Error sending form data:", error);
  }
});
