fetch("data.json")
  .then((response) => response.json())
  .then((chamberMembersData) => {
    const filteredMembers = chamberMembersData.business.filter(
      (member) => member.membership === "Silver" || member.membership === "Gold"
    );

    const spotlightMembers = [];
    while (spotlightMembers.length < 3 && filteredMembers.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredMembers.length);
      const member = filteredMembers.splice(randomIndex, 1)[0];
      spotlightMembers.push(member);
    }

    const box6 = document.getElementById("box6");
    const box7 = document.getElementById("box7");
    const box8 = document.getElementById("box8");

    if (spotlightMembers.length > 0) {
      box6.innerHTML = `
      <h3>${spotlightMembers[0].name}</h3>
      <img src="${spotlightMembers[0].image}" alt="${spotlightMembers[0].name}" />
      <p>Status: ${spotlightMembers[0].membership}</p>
    `;
    }

    if (spotlightMembers.length > 1) {
      box7.innerHTML = `
      <h3>${spotlightMembers[1].name}</h3>
      <img src="${spotlightMembers[1].image}" alt="${spotlightMembers[1].name}" />
      <p>Status: ${spotlightMembers[1].membership}</p>
    `;
    }

    if (spotlightMembers.length > 2) {
      box8.innerHTML = `
      <h3>${spotlightMembers[2].name}</h3>
      <img src="${spotlightMembers[2].image}" alt="${spotlightMembers[2].name}" />
      <p>Status: ${spotlightMembers[2].membership}</p>
    `;
    }
  })
  .catch((error) => {
    console.error("Error fetching JSON data:", error);
  });
