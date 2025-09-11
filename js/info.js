document.addEventListener("DOMContentLoaded", () => {
  const projects = {
    senko: {
      title: "Senko-san",
      status: "Online",
      shortDescription: "An Senko-san themed bot Discord bot.",
      longDescription: "An Senko-san themed Discord bot.",
      image: "img/projects/senko.png",
      links: {
        Invite:
          "https://discord.com/oauth2/authorize?client_id=1265048812200919124",
      },
    },
    easymc: {
      title: "EasyMC",
      status: "Closed",
      shortDescription: "A factions Minecraft server.",
      longDescription:
        "A factions Minecraft server, which also includes other modes like Survival.\n\nThe server is now being managed by the ArcaneMC team.",
      image: "img/projects/EasyMC-Logo.png",
      links: {
        "ArcaneMC Website": "https://www.arcanemc.it",
      },
    },
    oscar: {
      title: "[GTX] Oscar Discord Bot",
      status: "Discontinued",
      shortDescription: "A Discord bot for Team GTX.",
      longDescription:
        "Since I left Team GTX I decided to quit [GTX] Oscar development I put his source code online.\n\nP.S.: Fully italian bot.",
      image: "img/projects/oscar.png",
      links: {
        "Source code": "https://github.com/SlimeBluKing/GTX-Oscar",
      },
    },
    shiro: {
      title: "Shiro-san",
      status: "Discontinued",
      shortDescription: "A Discord bot for Zeta's Community.",
      longDescription:
        "A Discord bot for Zeta's Community. It was a fork of Senko-san made in JavaScript adapted to the needs of the server.\n\nP.S.: Fully italian bot.",
      image: "img/projects/shiro.png",
      links: {
        "Source code": "https://github.com/SlimeBluKing/Shiro-san",
        "Zeta's Community": "https://discord.gg/NXckFhDyDy",
      },
    },
  };

  const projectsContainer = document.getElementById("projects-container");
  for (const projectId in projects) {
    const project = projects[projectId];
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");
    projectElement.dataset.projectId = projectId;

    projectElement.innerHTML = `
      <img alt="Project Icon" src="${project.image}" />
      <div class="details">
        <h2>
          ${project.title}<span class="label">${project.status}</span>
        </h2>
        <p>${project.shortDescription}</p>
      </div>
    `;
    projectsContainer.appendChild(projectElement);
  }

  const modal = document.getElementById("projectModal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalLinks = document.getElementById("modal-links");
  const closeButton = document.querySelector(".close-button");

  document.querySelectorAll(".project").forEach((projectElement) => {
    projectElement.addEventListener("click", () => {
      const projectId = projectElement.dataset.projectId;
      const project = projects[projectId];

      if (project) {
        modalImg.src = project.image;
        modalTitle.textContent = project.title;
        modalDescription.innerHTML = project.longDescription.replace(
          /\n/g,
          "<br>"
        );
        modalLinks.innerHTML = "";

        for (const linkName in project.links) {
          const link = document.createElement("a");
          link.href = project.links[linkName];
          link.textContent = linkName;
          link.target = "_blank";
          modalLinks.appendChild(link);
        }

        modal.classList.add("modal-visible");
      }
    });
  });

  closeButton.addEventListener("click", () => {
    modal.classList.remove("modal-visible");
  });

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.classList.remove("modal-visible");
    }
  });
});
