class ScrollButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        /* Gaya tombol Scroll to Top */
        #scrollToTopButton {
          display: none;
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: var(--accentColorDark);
          color: var(--primaryColor);
          border: 2px solid var(--secondaryColor);
          border-radius: 12px;
          padding: 10px;
          cursor: pointer;
          z-index: 99;
          transition: transform 0.3s ease;
        }

        #scrollToTopButton:hover {
          transform: scale(1.1);
        }

        #scrollToTopButton:active {
          transform: scale(0.9);
        }
      </style>
      <!-- Tombol Scroll to Top -->
      <button id="scrollToTopButton">
        <i class="fas fa-arrow-up"></i>
        <!-- Ikon panah ke atas -->
      </button>
    `;

    // Fungsi untuk menggulir ke atas
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth" // Animasi scroll halus
      });
    };

    // Menambahkan event listener ke tombol scroll
    const scrollToTopButton = this.querySelector("#scrollToTopButton");
    scrollToTopButton.addEventListener("click", scrollToTop);

    
  }
}

// Show the scroll to top button when user scrolls down
window.onscroll = function () {
  if (document.documentElement.scrollTop > 100) {
      document.getElementById("scrollToTopButton").style.display = "block";
  } else {
      document.getElementById("scrollToTopButton").style.display = "none";
  }
};
customElements.define('scroll-button', ScrollButton);
