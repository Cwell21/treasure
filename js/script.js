
const elBoard = document.getElementById("gameBoard");
const elControl = document.getElementById("sideControls");

(function() {

  
  //GAME OPTIONS
  let gameOptions = {
    boardSize: 36,
    dragon: {
      name: "Lisa",
      image: "./images/Dragon1.jpg",
      location: 0,      
    },
    treasure: {
      image: "./images/treasure.jpg",
      location: 0
    },
    user: {
      name: "Brave Warrior",
      image: "./images/hero.png",
      location: 0,
      move: (dir) => {    
        
        gameOptions.user.elHero = document.getElementById(gameOptions.user.location + dir);
        gameOptions.user.elHero.appendChild(document.createElement("img")).setAttribute("src", gameOptions.user.image);
        gameOptions.user.elHero.appendChild(document.createElement("img")).setAttribute("id", "hero");
      }    
    },
  };

  /*************************************** 
  GAME BOARD OBJECT
  METHODS AND PROPERTIES:
    createBoard - creates div elements and their attributes for individual game tiles
    fillBoard - place Treasure and dragon nodes
    addContorols - add buttons for character movement
  ***************************************/  

  let gameBoard = {
    createBoard: (tile) => {      
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
    addControls: (id) => {
      let elButton = document.createElement("div");
      elButton.setAttribute("class", "dirButton")
      elButton.setAttribute("id", id);
      elButton.addEventListener("click", () => {gameOptions.user.move(id)});
      elControl.appendChild(elButton);

      
    },
  }

  
  //CREATE BOARD TILES

  for (let i=0; i < gameOptions.boardSize; i++) {
    gameBoard.createBoard(i);
  }

  //CREATE CONTROLS
  for (let i=0; i < 4; i++){
    gameBoard.addControls(i);
  }

  gameOptions.user.elHero = document.getElementById("0");
  gameOptions.user.elHero.appendChild(document.createElement("img")).setAttribute("src", gameOptions.user.image);
  gameOptions.user.elHero.appendChild(document.createElement("img")).setAttribute("id", "hero");



  gameBoard.fillBoard();
  console.log(gameOptions.dragon.location);
  console.log(gameOptions.treasure.location);

}());