// Sample Movie Data (In a real-world app, this would come from an API or database)
const games = [
    { id: 1, title: "God Of War", year: 2018, rating: 9.1, imageUrl: "https://m.media-amazon.com/images/M/MV5BNDVlOTdkNzctMDU2Zi00MGEzLWE5NjMtODY5ZTI0ZGZiNWQyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", link: './god of war/part.html' },
    { id: 2, title: "Sons Of The Forest", year: 2008, rating: 9.0, imageUrl: "https://www.giantbomb.com/a/uploads/scale_small/33/338034/3381991-2584519888-libra.jpg" },
    { id: 3, title: "Forza Horizon 4", year: 1994, rating: 9.3, imageUrl: "forza horizon 4/img/forza1.jpg", link:"forza horizon 4/forza.html" },
    { id: 4, title: "Rust", year: 2014, rating: 8.6, imageUrl: "https://i.pinimg.com/564x/e8/d7/f8/e8d7f8aeb6181d3de1438445e4aa828e.jpg" },
    { id: 5, title: "The Last Of Us Part 1", year: 1972, rating: 9.2, imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg" },
    { id: 6, title: "Only up 2", year: 1994, rating: 8.9, imageUrl: "https://i.kinja-img.com/image/upload/c_fill,h_352,q_80,w_264/e40e442c164121670beae4897c80cd08.jpg" },
    { id: 6, title: "Grand Theft Auto V", year: 1994, rating: 8.9, imageUrl: "https://images5.alphacoders.com/421/421638.jpg" },
    { id: 7, title: "hitman", year: 2011, rating: 6.8, imageUrl: "https://images4.alphacoders.com/194/194934.jpg", },
    { id: 8, title: "Mafia III", year: 2010, rating: 6.8, imageUrl: "https://images5.alphacoders.com/693/693371.jpg", },
    { id: 9, title: "God Of War", year: 2018, rating: 9.1, imageUrl: "https://images.alphacoders.com/135/1358417.png", link: './god of war/part.html' },
    { id: 10, title: "Sons Of The Forest", year: 2008, rating: 9.0, imageUrl: "https://www.giantbomb.com/a/uploads/scale_small/33/338034/3381991-2584519888-libra.jpg" },
    { id: 11, title: "Forza Horizon 4", year: 1994, rating: 9.3, imageUrl: "https://wallpapers.com/images/high/forza-forest-iphone-uu3ctwo6gnp4qdch.webp" },
    { id: 12, title: "Rust", year: 2014, rating: 8.6, imageUrl: "https://i.pinimg.com/564x/e8/d7/f8/e8d7f8aeb6181d3de1438445e4aa828e.jpg" },
    { id: 13, title: "The Last Of Us Part 1", year: 1972, rating: 9.2, imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg" },
    { id: 14, title: "Only up 2", year: 1994, rating: 8.9, imageUrl: "https://i.kinja-img.com/image/upload/c_fill,h_352,q_80,w_264/e40e442c164121670beae4897c80cd08.jpg" },
    { id: 15, title: "Grand Theft Auto V", year: 1994, rating: 8.9, imageUrl: "https://images5.alphacoders.com/421/421638.jpg" },
    { id: 16, title: "hitman", year: 2011, rating: 6.8, imageUrl: "https://images4.alphacoders.com/194/194934.jpg", },
    { id: 17, title: "Mafia III", year: 2010, rating: 6.8, imageUrl: "https://images5.alphacoders.com/693/693371.jpg", },
    { id: 18, title: "God Of War", year: 2018, rating: 9.1, imageUrl: "https://images.alphacoders.com/135/1358417.png", link: './god of war/part.html' },
    { id: 19, title: "Sons Of The Forest", year: 2008, rating: 9.0, imageUrl: "https://www.giantbomb.com/a/uploads/scale_small/33/338034/3381991-2584519888-libra.jpg" },
    { id: 20, title: "Forza Horizon 4", year: 1994, rating: 9.3, imageUrl: "https://wallpapers.com/images/high/forza-forest-iphone-uu3ctwo6gnp4qdch.webp" },
    { id: 21, title: "Rust", year: 2014, rating: 8.6, imageUrl: "https://i.pinimg.com/564x/e8/d7/f8/e8d7f8aeb6181d3de1438445e4aa828e.jpg" },
    { id: 22, title: "The Last Of Us Part 1", year: 1972, rating: 9.2, imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg" },
    { id: 23, title: "Only up 2", year: 1994, rating: 8.9, imageUrl: "https://i.kinja-img.com/image/upload/c_fill,h_352,q_80,w_264/e40e442c164121670beae4897c80cd08.jpg" },
    { id: 24, title: "Grand Theft Auto V", year: 1994, rating: 8.9, imageUrl: "https://images5.alphacoders.com/421/421638.jpg" },
    { id: 25, title: "hitman", year: 2011, rating: 6.8, imageUrl: "https://images4.alphacoders.com/194/194934.jpg", },
    { id: 26, title: "Mafia III", year: 2010, rating: 6.8, imageUrl: "https://images5.alphacoders.com/693/693371.jpg", },
  ];


  
  
  
  function displaygames(gamesList, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    gamesList.forEach(games => {
      const gamesCard = document.createElement('div');
      gamesCard.classList.add('games-card');
      gamesCard.innerHTML = `
      <a href="${games.link}" target="_blank">
        <img src="${games.imageUrl}" alt="${games.title}">
        <div class="games-info">
          <h3>${games.title}</h3>
          <p>${games.year} - Rating: ${games.rating} </p>
        </div>
      </a>
    `;
      container.appendChild(gamesCard);
    });
  }
 
  function searchgames() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filteredgames = games.filter(games => games.title.toLowerCase().includes(query));
    displaygames(filteredgames, 'games-list');
  }
  

  displaygames(games, 'games-list');
  
  
  