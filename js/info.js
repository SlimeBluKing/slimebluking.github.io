document.addEventListener("DOMContentLoaded", () => {
  const projects = {
    senko: {
      title: "Senko-san",
      status: "Online",
      shortDescription: "A Senko-san themed Discord bot.",
      longDescription: "A Senko-san themed Discord bot.",
      image: "img/projects/senko.png",
      links: {
        Invite: {
          url: "https://discord.com/oauth2/authorize?client_id=1265048812200919124",
          icon: "fa-solid fa-user-plus",
        },
      },
    },
    moonsong: {
      title: "Moonsong",
      status: "Coming Soon",
      shortDescription: "The moon's songs are unveiling before you - awaited are the heroes to discover the mystery of a world ruled by music!",
      longDescription: 'A new Song of the Moon is about to begin - are you ready to take part on the journey?\n\n<iframe width="420" height="236" src="https://www.youtube.com/embed/n_CnLDdTQn8?si=i2JiTJJkwPZxqh59" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      image: "img/projects/moonsong.png",
      links: {
        Website: {
          url: "https://www.moonsong-game.com/",
          icon: "fa-solid fa-globe",
        },
        "X Profile": {
          url: "https://x.com/Moonsong_Game",
          icon: "fa-brands fa-x-twitter",
        },
        Youtube: {
          url: "https://www.youtube.com/@Moonsong_Game",
          icon: "fa-brands fa-youtube",
        }
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
        "ArcaneMC Website": {
          url: "https://www.arcanemc.it",
          icon: "fa-solid fa-globe",
        },
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
        "Source code": {
          url: "https://github.com/SlimeBluKing/GTX-Oscar",
          icon: "fa-brands fa-github",
        },
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
        "Source code": {
          url: "https://github.com/SlimeBluKing/Shiro-san",
          icon: "fa-brands fa-github",
        },
        "Zeta's Community": {
          url: "https://discord.gg/NXckFhDyDy",
          icon: "fa-brands fa-discord",
        },
      },
    },
  };

  const projectsContainer = document.getElementById("projects-container");
  for (const id in projects) {
    const p = projects[id];
    const el = document.createElement("div");
    el.classList.add("project");
    el.dataset.projectId = id;
    el.innerHTML = `
      <img alt="Project Icon" src="${p.image}" />
      <div class="details">
        <h2>${p.title}<span class="label">${p.status}</span></h2>
        <p>${p.shortDescription}</p>
      </div>
    `;
    projectsContainer.appendChild(el);
  }

  const modal = document.getElementById("projectModal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalLinks = document.getElementById("modal-links");
  const closeButton = document.querySelector(".close-button");

  function buildLinks(linksObj) {
    modalLinks.innerHTML = "";
    for (const label in linksObj) {
      const entry = linksObj[label];
      let url, icon;
      if (typeof entry === "string") {
        url = entry;
        icon = "fa-solid fa-up-right-from-square";
      } else {
        url = entry.url;
        icon = entry.icon || "fa-solid fa-up-right-from-square";
      }
      const a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.innerHTML = `<i class="${icon}" aria-hidden="true"></i><span>${label}</span>`;
      modalLinks.appendChild(a);
    }
  }

  document.querySelectorAll(".project").forEach((el) => {
    el.addEventListener("click", () => {
      const p = projects[el.dataset.projectId];
      if (!p) return;

      window.SoundEffects?.playDialogSound?.();
      modalImg.src = p.image;
      modalTitle.textContent = p.title;
      modalDescription.innerHTML = p.longDescription.replace(/\n/g, "<br>");
      buildLinks(p.links);
      modal.classList.add("modal-visible");
    });
  });

  closeButton.addEventListener("click", () => {
    window.SoundEffects?.playBackSound?.();
    modal.classList.remove("modal-visible");
  });
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("modal-visible");
  });
});
