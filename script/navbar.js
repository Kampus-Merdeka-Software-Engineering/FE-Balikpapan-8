window.onload = function () {
    const toggleButton = document.getElementsByClassName('toggle-button')[0]
    const navbarLinks = document.getElementsByClassName('navbar-links')[0]
    const searchAndButton = document.getElementsByClassName('search-and-button')[0]

    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
        searchAndButton.classList.toggle('active');
        toggleButton.classList.toggle('active'); // Menambah/menghapus kelas "active" pada tombol toggle
    });
}
