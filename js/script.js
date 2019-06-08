
//STORE BOARD AND CONTROL ELEMENTS FROM HTML DOCUMENT
const elBoard = document.getElementById('gameBoard');
const elControl = document.getElementById('sideControls');


//CODE FOR INITIAL PLACEMENT OF HERO (TILE 0)
let elCurLoc = [0,0];

//FUNCTION TO CHECK HERO LOCATION VS GAME NODE LOCATIONS
let chkLocation = heroLoc => {
  if(virBoard[elCurLoc[0]][elCurLoc[1]] != 'x') {
    if(virBoard[elCurLoc[0]][elCurLoc[1]] === 't') {
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
  boardSize: 36, //NUMBER OF TOTAL TILES (COL = SQRT ROW = SQRT)
  tileId: 0, //PROPERTY TO KEEP TRACK OF ID FOR EACH TILE
  dragon: {
    name: 'Lisa',
    image: './images/Dragon1.jpg',
    location: [
      0, //Y - ROW
      0, //X - CELL
    ]
  },
  treasure: {
    image: './images/treasure.jpg',
    location: [
      0, //Y - ROW
      0, //X - CELL
    ]
  },
  user: {
    name: 'Brave Warrior',
    image: './images/hero.png',
    location: [
      0, //Y - ROW
      0, //X - CELL
    ],
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
  createBoard: (row) => {
    let elDivRow = document.createElement('div');

    elDivRow.setAttribute('class', 'row');
    elBoard.appendChild(elDivRow);

    for (let i=0; i < Math.sqrt(gameOptions.boardSize); i++) {
      let elDiv = document.createElement('div');
      let id = row.toString() + i.toString();

      elDiv.setAttribute('class', 'x');
      elDiv.setAttribute('id', id);
      elDivRow.appendChild(elDiv);
    }

    document.getElementById('00').classList.add('hero');

  },

  fillBoard: () => {
    // RANDOMLY PLACE TREASURE NODE (LOCATION 0 NOT ALLOWED)
    do {
      gameOptions.treasure.location[0] = Math.floor(Math.random() * Math.sqrt(gameOptions.boardSize));
      gameOptions.treasure.location[1] = Math.floor(Math.random() * Math.sqrt(gameOptions.boardSize));
    } while (gameOptions.treasure.location[0] == 0 && gameOptions.treasure.location[1] == 0);

    do {
      gameOptions.dragon.location[0] = Math.floor(Math.random() * Math.sqrt(gameOptions.boardSize));
      gameOptions.dragon.location[1] = Math.floor(Math.random() * Math.sqrt(gameOptions.boardSize));
    } while (gameOptions.dragon.location[0] === 0 && gameOptions.dragon.location[1] === 0 || gameOptions.dragon.location[0] === gameOptions.treasure.location[0] && gameOptions.dragon.location[1] === gameOptions.treasure.location[1])

    nodeLocation(gameOptions.treasure.location[0], gameOptions.treasure.location[1], 't');
    nodeLocation(gameOptions.dragon.location[0], gameOptions.dragon.location[1], 'd');
  }
}
let virBoard = Array(0); //INITIALIZE VIRTUAL BOARD ARRAY


function moveChar(x,y) {
  console.log(elCurLoc);
  let curLocId = elCurLoc[0].toString() + elCurLoc[1].toString();

  elCurLoc[0] += y;
  elCurLoc[1] += x;

  try {
    let newLocId = elCurLoc[0].toString() + elCurLoc[1].toString();
    document.getElementById(newLocId).classList.add('hero');
    document.getElementById(curLocId).classList.remove('hero');
    chkLocation();
  }
  catch(err) {
    elCurLoc[0] -= y;
    elCurLoc[1] -= x;

    alert('You have run into the wall');

    return;
  }
}

function nodeLocation(x,y,gameNode) {
  virBoard[y][x] = gameNode;
}

//CREATES VIRTUAL BOARD - DEFAULT 6 (sqrt of 36) ROWS OF 6 (sqrt of 36) CELLS
for (let i=0; i < Math.sqrt(gameOptions.boardSize); i++) {
  let virRow = Array(Math.sqrt(gameOptions.boardSize)).fill('x');
  virBoard.push(virRow);
}

//CREATE BOARD TILES
for (let i=0; i < Math.sqrt(gameOptions.boardSize); i++) {
    gameBoard.createBoard(i);
}

gameBoard.fillBoard();

for (let i=0; i < virBoard.length; i++) {
  console.log(virBoard[i]);
}
