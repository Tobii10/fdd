document.addEventListener('DOMContentLoaded', () => {
  loadPlayers();
  loadFixtures();

  // Handle Player Registration
  const playerForm = document.getElementById('playerForm');
  if (playerForm) {
    playerForm.addEventListener('submit', e => {
      e.preventDefault();
      alert('Player Registered Successfully!');
      playerForm.reset();
    });
  }

  // Handle Team Registration
  const teamForm = document.getElementById('teamForm');
  if (teamForm) {
    teamForm.addEventListener('submit', e => {
      e.preventDefault();
      alert('Team Registered Successfully!');
      teamForm.reset();
    });
  }
});

function loadPlayers() {
  const playerList = document.getElementById('player-list');
  if (!playerList) return;

  const players = [
    { name: "Shreeyansh Poudel", position: "Midfielder", age: 20, image: "images/473396478_2943955595767199_8708406628807614391_n.jpg" },
    { name: "Sabin Ruchal", position: "Forward", age: 21, image: "images/WhatsApp Image 2025-06-16 at 12.36.22 PM.jpeg" },
    { name: "Diya Adhikari", position: "Goalkeeper", age: 18, image: "images/386380356_383740268056178_5612560458492953179_n.jpg" },
    { name: "Anupa Thapa", position: "Defender", age: 18, image: "images/457813600_3935561210000896_2944712016746266828_n.jpg" }
  ];

  players.forEach(player => {
    const div = document.createElement('div');
    div.classList.add('player');
    div.innerHTML = `
      <img src="${player.image}" alt="${player.name}" class="player-photo" />
      <h3>${player.name}</h3>
      <p>Position: ${player.position}</p>
      <p>Age: ${player.age}</p>`;
    playerList.appendChild(div);
  });
}

function loadFixtures() {
  const fixtureList = document.getElementById('fixture-list');
  if (!fixtureList) return;

  const fixtures = [
    { opponent: "College FC", date: "2025-07-01" },
    { opponent: "City United", date: "2025-07-15" },
    { opponent: "Academy Stars", date: "2025-08-01" }
  ];

  fixtures.forEach(fixture => {
    const div = document.createElement('div');
    div.classList.add('fixture');
    div.innerHTML = `<h3>vs ${fixture.opponent}</h3>
                     <p>Date: ${fixture.date}</p>`;
    fixtureList.appendChild(div);
  });
}
