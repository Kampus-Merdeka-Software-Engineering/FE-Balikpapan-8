const aboutData = {
  aboutUs: {
    title: "ABOUT US",
    content:
      "RobinCode is dedicated to reshaping the fashion industry through sustainable practices. We curate top-quality thrifted fashion pieces, prioritizing both style and eco-consciousness. Join us in the fashion revolution today!",
    imagePath: "../Img/about img.jpg",
  },
  team: {
    title: "MEET OUR GREAT TEAM",
    members: [
      {
        name: "Diana",
        role: "Quality Assurance",
        socialMedia: {
          instagram: "https://www.instagram.com/username",
          linkedin: "https://www.linkedin.com/in/username",
          github: "https://github.com/username",
        },
        image: "../Img/team/diana.jpeg",
      },
      {
        name: "Yoko",
        role: "Front End Engineer",
        socialMedia: {
          instagram: "https://www.instagram.com/username",
          linkedin: "https://www.linkedin.com/in/username",
          github: "https://github.com/username",
        },
        image: "../Img/team/yoko.jpg",
      },
      {
        name: "Septi",
        role: "Quality Assurance",
        socialMedia: {
          instagram: "https://www.instagram.com/username",
          linkedin: "https://www.linkedin.com/in/username",
          github: "https://github.com/username",
        },
        image: "../Img/team/septi.jpeg",
      },
      {
        name: "Shinta",
        role: "Front End Engineer",
        socialMedia: {
          instagram: "https://www.instagram.com/username",
          linkedin: "https://www.linkedin.com/in/username",
          github: "https://github.com/username",
        },
        image: "../Img/team/shinta.jpeg",
      },
      {
        name: "Prada",
        role: "Back End Engineer",
        socialMedia: {
          instagram: "https://www.instagram.com/username",
          linkedin: "https://www.linkedin.com/in/username",
          github: "https://github.com/username",
        },
        image: "../Img/team/prada.png",
      },
      {
        name: "Hilda",
        role: "Back End Engineer",
        socialMedia: {
          instagram: "https://www.instagram.com/username",
          linkedin: "https://www.linkedin.com/in/username",
          github: "https://github.com/username",
        },
        image: "../Img/team/hilda.jpeg",
      },
      // Tambahkan anggota tim lainnya di sini
    ],
  },
};

// Function to fill content in the HTML
function fillContent() {
  // Fill About Us section
  document.getElementById("about-title").textContent = aboutData.aboutUs.title;
  document.getElementById("about-content").textContent =
    aboutData.aboutUs.content;
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
}

// Call the function to fill content when the page loads
fillContent();
