fetch('data/games.json')
  .then(response => response.json())
  .then(games => {
    const container = document.getElementById('game-container');

    games.forEach(game => {
      // Create the outer slot
      const gameDiv = document.createElement('div');
      gameDiv.className = 'game-slot';

      // Create the link
      const link = document.createElement('a');
      link.href = `${game.directory}/`;
      link.target = '_blank';

      // Game image
      const img = document.createElement('img');
      img.src = `${game.directory}/${game.image}`;
      img.alt = game.name;
      img.className = 'game-thumb';

      // Game name
      const title = document.createElement('span');
      title.textContent = game.name;
      title.className = 'game-title';

      // Append image and name to the link
      link.appendChild(img);
      link.appendChild(title);

      // Append link to the slot
      gameDiv.appendChild(link);

      // Add to the page
      container.appendChild(gameDiv);
    });
  })
  .catch(error => {
    console.error('Failed to load games:', error);
    const container = document.getElementById('game-container');
    container.textContent = '⚠️ Failed to load games.';
  });
