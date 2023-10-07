const API_BASE_URL = "https://be-balikpapan-8-production.up.railway.app";

function fillContent() {
  // Fetch data from the API
  fetch(`${API_BASE_URL}/about`)
    .then((response) => response.json())
    .then((data) => {
      const membersData = data.members; // Access the "members" array in the response

      // Fill Team section
      const teamList = document.getElementById("team-list");

      membersData.forEach((member) => {
        const teamCard = document.createElement("div");
        teamCard.classList.add("team-cards");
        teamCard.innerHTML = `
          <img src="${member.image}" alt="${member.name}" />
          <h1>${member.name}</h1>
          <p>${member.role}</p>
          <div class="social-media">
            <a href="${member.instagram}" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
            <a href="${member.linkedin}" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
            <a href="${member.github}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
          </div>
        `;
        teamList.appendChild(teamCard);
      });
    })
    .catch((error) => {
      console.error("Error fetching member data:", error);
    });
}

fillContent();
