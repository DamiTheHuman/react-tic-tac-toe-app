import { boardMatches } from "./boardAPI";

/* A custom api to handle the bot/cpu movement against the player*/
export const getBotMove = (
  currentBoard,
  botPlayer = "0",
  occupiedCells,
  botValues
) => {
  const bothValues = [...occupiedCells, ...botValues];

  var cellLinkData = getCellLinkData(botValues); // The data of the cell links
  var value = 0;
  const recentBotMove = botValues[botValues.length - 1];
  const getRandomBoardPlacement = () => {
    var result = 0;
    while (true) {
      result = Math.floor(Math.random() * 8) + 1;
      if (!bothValues.includes(result)) {
        break;
      }
    }
    return result;
  };
  const performSimpleMove = () => {
    if (hasBottom(recentBotMove, bothValues)) {
      value = placeBottom(recentBotMove); //place downards
    } else if (hasTop(recentBotMove, bothValues)) {
      value = placeTop(recentBotMove);
    } else if (hasRight(recentBotMove, bothValues)) {
      value = placeRight(recentBotMove);
    } else if (hasLeft(recentBotMove, bothValues)) {
      value = placeLeft(recentBotMove);
    } else {
      value = getRandomBoardPlacement();
    }
  };
  //If there is only one or less moves currently on the board simply choose a randoms pot
  if (currentBoard.length <= 1) {
    value = getRandomBoardPlacement();
  } else {
    //Place the next bot move right next to the previous placed value
    if (botValues.length > 0 && cellLinkData.highestLinkCount === 1) {
      //If its in the first column
      performSimpleMove();
    } else if (
      botValues.length > 0 &&
      cellLinkData.highestLinkCount === 2 &&
      cellLinkData.winPosition
    ) {
      if (!bothValues.includes(cellLinkData.winPosition)) {
        value = cellLinkData.winPosition; //Win the game
      } else {
        performSimpleMove();
      }
    }
  }
  return { cell: value, player: botPlayer };
};

/**
 * Check if the set cell is within the first column
 * @value the value of the cell being checked
 */
const isFirstColumn = (value) => {
  switch (value) {
    case 1:
    case 4:
    case 7:
      return true;
    default:
      return false;
  }
};
/**
 * Check if the set cell is in the middle column
 * @value the value of the cell being checked
 */
const isMiddleColumn = (value) => {
  switch (value) {
    case 2:
    case 5:
    case 8:
      return true;
    default:
      return false;
  }
};
/**
 * Check if the set cell is in the last column
 * @value the value of the cell being checked
 */
const isLastColumn = (value) => {
  switch (value) {
    case 3:
    case 6:
    case 9:
      return true;
    default:
      return false;
  }
};
/**
 * Checks if the cell has a cell placement to the bottom
 * @value the value of the cell being checked
 */
const hasBottom = (value, boardValues) => {
  if (boardValues.includes(placeBottom(value))) {
    return false;
  }
  if (value > 0 && value < 7) {
    return true;
  } else {
    return false;
  }
};
/**
 * Checks if the cell has a cell placement to the right
 * @value the value of the cell being checked
 * @boardValues the current cell values placed on the board
 */
const hasRight = (value, boardValues) => {
  if (boardValues.includes(placeRight(value))) {
    return false;
  }
  if (isFirstColumn(value)) {
    return true;
  } else if (isMiddleColumn(value)) {
    return true;
  }
  return false;
};
/**
 * Checks if the cell has a cell placement to the left
 * @value the value of the cell being checked
 * @boardValues the current cell values placed on the board
 */
const hasLeft = (value, boardValues) => {
  if (boardValues.includes(placeLeft(value))) {
    return false;
  }
  if (isLastColumn(value)) {
    return true;
  } else if (isMiddleColumn(value)) {
    return true;
  }
  return false;
};
/**
 * Checks if the cell has a cell placement to the top
 * @value the value of the cell being checked
 * @boardValues the current cell values placed on the board
 */
const hasTop = (value, boardValues) => {
  if (boardValues.includes(placeTop(value))) {
    return false;
  }
  if (value > 3) {
    return true;
  } else {
    return false;
  }
};

/**
 * Finds the right position cell relative to the current cell
 * @value the value of the cell being checked
 */
const placeRight = (value) => {
  return value + 1;
};
/**
 * Finds the bottom positioned cell relative to the current cell
 * @value the value of the cell being checked
 */
const placeBottom = (value) => {
  return value + 3;
};
/**
 * Finds the left positioned cell relative to the current cell
 * @value the value of the cell being checked
 */
const placeLeft = (value) => {
  return value - 1;
};
/**
 * Finds the top positioned cell relative to the current cell
 * @value the value of the cell being checked
 */
const placeTop = (value) => {
  return value - 3;
};
/**
 * Gets the amount of matches the bot has in a consecutive order
 * Useful to find out if the bot can end the game or even block the Player 1
 * @occupiedCells The current occupied cells of the player or bot
 */
const getCellLinkData = (occupiedCells) => {
  const currentBoardMatches = boardMatches();
  var highestLinkCount = 0;
  var endLinkPosition = 0;
  var winPosition = -1;
  for (var x = 0; x < currentBoardMatches.length; x++) {
    for (var y = 0; y < currentBoardMatches[x].length; y++) {
      var cellLinkData = 0;
      var index = 0;

      for (var z = 0; z < currentBoardMatches.length; z++) {
        if (occupiedCells.includes(currentBoardMatches[x][y][z])) {
          cellLinkData++;
          index = currentBoardMatches[x][y][z];
        }
      }
      if (cellLinkData > highestLinkCount) {
        highestLinkCount = cellLinkData;
        endLinkPosition = index;
        winPosition = currentBoardMatches[x][y].filter(
          (x) => !occupiedCells.includes(x)
        )[0];
        break;
      }
    }
  }
  return { highestLinkCount, endLinkPosition, winPosition };
};
