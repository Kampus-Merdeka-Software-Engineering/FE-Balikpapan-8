
// Swiper
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
    // when window width is >= 320px
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
  }
});


// End Swiper