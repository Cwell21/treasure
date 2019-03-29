
(function() {

  //GAME OPTIONS
  let gameOptions = {
    boardSize: 36,
    dragon: {
      name: "Lisa",
      image: "../images/lisa.jpg",
      location: 0
    },
    treasure: {
      image: "../images/treasure.jpg",
      location: 0
    },
    user: {
      name: "Brave Warrior",
      image: "../images/warrior.png",
      location: 0
    },
  };

  // GAME BOARD OBJECT
  let gameBoard = {
    createBoard: (tile) => {
      let elBoard = document.getElementById("gameBoard");
      let elDiv = document.createElement("div");
      elDiv.setAttribute("id", tile);
      elDiv.setAttribute("class", "brdTile");
      elBoard.appendChild(elDiv);
    },
    fillBoard: () => {
      // RANDOMLY PLACE TREASURE NODE (LOCATION 0 NOT ALLOWED)
      do {
        gameOptions.treasure.location = Math.round(Math.floor(Math.random() * gameOptions.boardSize));
      }while (gameOptions.treasure.location == 0)
      //RANDOMLY PLACE DRAGON NODE (LOCATION 0 AND DRAGON.LOCATOIN NOT ALLOWED)
      do {
        gameOptions.dragon.location = Math.round(Math.floor(Math.random() * gameOptions.boardSize));        
      } while (gameOptions.dragon.location == 0 || gameOptions.dragon.location == gameOptions.treasure.location)
    },
  }

  //CREATE BOARD TILES

  for (let i=0; i < gameOptions.boardSize; i++) {
    gameBoard.createBoard(i);
  }

  gameBoard.fillBoard();
  
}());