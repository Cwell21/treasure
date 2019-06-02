
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
  createBoard: (x,y) => {
    let elDiv = document.createElement("div");
    elDiv.setAttribute("id", x + y);
    elDiv.setAttribute("class", "brdTile");
    elBoard.appendChild(elDiv);
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

// let virBoard = Array(gameOptions.boardSize).fill('x');
//CREATES VIRTUAL BOARD
for (let i=0; i < Math.sqrt(gameOptions.boardSize); i++) {
  let virRow = Array(Math.sqrt(gameOptions.boardSize)).fill('x');
  virBoard.push(virRow);
}

//CREATE BOARD TILES
for (let i=0; i < Math.sqrt(gameOptions.boardSize); i++) {
  for(let j=0; j < Math.sqrt(gameOptions.boardSize); j++) {
    gameBoard.createBoard(i,j);
    console.log(virBoard[i]);
  }
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
