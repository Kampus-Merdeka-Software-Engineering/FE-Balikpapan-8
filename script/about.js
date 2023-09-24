// Function to fill content in the HTML
function fillContent() {
  // Fetch data from about.json
  fetch('../data/about.json')
    .then((response) => response.json())
    .then((aboutData) => {
      // Fill About Us section
      document.getElementById("about-title").textContent = aboutData.aboutUs.title;
      document.getElementById("about-content").textContent = aboutData.aboutUs.content;
      document.getElementById("about-image").src = aboutData.aboutUs.imagePath;

      // Fill Our Team section
      document.getElementById("team-title").textContent = aboutData.team.title;
      const teamList = document.getElementById("team-list");
      aboutData.team.members.forEach((member) => {
        const teamCard = document.createElement("div");
        teamCard.classList.add("team-cards");
        teamCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}" />
            <h1>${member.name}</h1>
            <p>${member.role}</p>
            <div class="social-media">
              <a href="${member.socialMedia.instagram}" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
              <a href="${member.socialMedia.linkedin}" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
              <a href="${member.socialMedia.github}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
            </div>
          `;
        teamList.appendChild(teamCard);
      });
    });
}

fillContent();
