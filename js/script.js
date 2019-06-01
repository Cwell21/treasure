
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
  },
};

function moveChar(dir) {
  let curLoc = document.getElementById(gameOptions.user.location);
  let newLoc = gameOptions.user.location + dir;

  //REMOVE HERO CLASS FROM CURRENT LOCATION
  document.getElementById(gameOptions.user.location).classList.remove('hero');
  //ADD HERO CLASS TO NEW LOCATION
  document.getElementById(newLoc).classList.add('hero');

  gameOptions.user.location = newLoc; //UPDATE USER LOCATION

  chkLocation(newLoc); //CHECK LOCATION VS NODE LOCATIONS

}

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
      virBoard[gameOptions.treasure.location] = 't';
    }while (gameOptions.treasure.location == 0)

    //RANDOMLY PLACE DRAGON NODE (LOCATION 0 AND DRAGON.LOCATOIN NOT ALLOWED)
    do {
      gameOptions.dragon.location = Math.round(Math.floor(Math.random() * gameOptions.boardSize));
      virBoard[gameOptions.dragon.location] = 'd';
    } while (gameOptions.dragon.location == 0 || gameOptions.dragon.location == gameOptions.treasure.location)

  }
}

let virBoard = Array(gameOptions.boardSize).fill('x'); //CREATES VIRTUAL BOARD

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
