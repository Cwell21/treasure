
const elBoard = document.getElementById("gameBoard");
const elControl = document.getElementById("sideControls");

//FUNCTION TO CHECK HERO LOCATION VS GAME NODE LOCATIONS
let chkLocation = heroLoc => {
  if(virBoard[heroLoc] != 'x') {
    if(virBoard[heroLoc] === 't') {
      console.log('win');
      return 'win';
    } else {
      console.log('lose');
      return 'lose';
    }
  }
  return;
}

//GAME OPTIONS
let gameOptions = {
  boardSize: 36,
  tileId: 0,
  dragon: {
    name: "Lisa",
    image: "./images/Dragon1.jpg",
    location: [
      0, //X
      0, //Y
    ]
  },
  treasure: {
    image: "./images/treasure.jpg",
    location: [
      0, //X
      0, //Y
    ]
  },
  user: {
    name: "Brave Warrior",
    image: "./images/hero.png",
    location: [
      0, //X
      0, //Y
    ],
  },
};

function moveChar(loc, cell ,row) {



}

/***************************************
GAME BOARD OBJECT
METHODS AND PROPERTIES:
  createBoard - creates div elements and their attributes for individual game tiles
  fillBoard - place Treasure and dragon nodes
  addContorols - add buttons for character movement
***************************************/

let gameBoard = {
  createBoard: (tileId) => {
    let elDiv = document.createElement("div");
    elDiv.setAttribute("id", tileId);
    elDiv.setAttribute("class", "brdTile");
    elBoard.appendChild(elDiv);
    gameOptions.tileId += 1;
  },

  fillBoard: () => {

    // RANDOMLY PLACE TREASURE NODE (LOCATION 0 NOT ALLOWED)
    do {
      gameOptions.treasure.location = Math.round(Math.floor(Math.random() * gameOptions.boardSize));
      virBoard[gameOptions.treasure.location] = 't';
    }while (gameOptions.treasure.location == 0)

    //RANDOMLY PLACE DRAGON NODE (LOCATION 0 AND DRAGON.LOCATOIN NOT ALLOWED)
    do {
      gameOptions.dragon.location = Math.round(Math.floor(Math.random() * gameOptions.boardSize));
      virBoard[gameOptions.dragon.location] = 'd';
    } while (gameOptions.dragon.location == 0 || gameOptions.dragon.location == gameOptions.treasure.location)

  }
}
let virBoard = Array(Math.sqrt(gameOptions.boardSize)); //INITIALIZE VIRTUAL BOARD ARRAY


//CREATES VIRTUAL BOARD - DEFAULT 6 (sqrt of 36) ROWS OF 6 (sqrt of 36) CELLS
for (let i=0; i < Math.sqrt(gameOptions.boardSize); i++) {
  let virRow = Array(Math.sqrt(gameOptions.boardSize)).fill('x');
  virBoard.push(virRow);
}

//CREATE BOARD TILES
for (let i=0; i < gameOptions.boardSize; i++) {
    gameBoard.createBoard(i);
    console.log(virBoard[i]);
}

//CODE FOR INITIAL PLACEMENT OF HERO (TILE 0)
let elHero = document.getElementById("0");
elHero.classList.add("hero");

gameBoard.fillBoard();
console.log(gameOptions.dragon.location);
console.log(gameOptions.treasure.location);

for (let i=0; i < virBoard.length; i++) {
  console.log(virBoard[i]);
}
