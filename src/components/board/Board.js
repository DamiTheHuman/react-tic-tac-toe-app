import React from "react";
import DrawBoard from "./DrawBoard";
import GameMessage from "./GameMessage";

class Board extends React.Component {
  state = {
    boardHistory: [],
    players: ["Player 1", "AI"],
    player1Turn: true,
    winner: null,
    winType: 0,
    draw: false,
    winningFigures: [],
  };
  shouldComponentUpdate(nextProps, nextState) {
    if (!nextState.winner && nextState.boardHistory.length >= 3) {
      if (this.checkWinner(nextState.boardHistory)) {
        return true;
      }
      //Check ifs a draw
      if (nextState.boardHistory.length >= 9 && this.state.draw === false) {
        this.setState({ draw: true });
      }
    }
    return true;
  }
  /**
   *Stores the data of the draw cell when a cell is selecte
   *@value the current value of the cell selected
   */
  onCellSelected = (value) => {
    if (this.state.winner) {
      return;
    }
    for (var x = 0; x < this.state.boardHistory.length; x++) {
      if (this.state.boardHistory[x].cell === value) {
        return;
      }
    }
    var boardHistory = [
      ...this.state.boardHistory,
      { cell: value, player: this.getPlayer() },
    ];
    this.setState(
      {
        boardHistory: boardHistory,
      },
      this.toggleTurn()
    );
  };
  /**
   *Check for the winner
   * @currentBoardHistory the history of both players input on the board
   */
  checkWinner = (currentBoardHistory) => {
    const playerValues = this.filterValues(
      this.getPlayer(),
      currentBoardHistory
    );
    const possibleMatches = [
      [
        //Horizontal Matches
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      [
        //Vertical Matches
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
      ],
      [
        // Diagonal Matches
        [1, 5, 9],
        [3, 5, 7],
      ],
    ];

    for (var x = 0; x < possibleMatches.length; x++) {
      for (var y = 0; y < possibleMatches[x].length; y++) {
        var matchCount = 0;
        for (var z = 0; z < possibleMatches.length; z++) {
          if (playerValues.includes(possibleMatches[x][y][z])) {
            matchCount++;
          }
        }
        if (matchCount >= 3) {
          this.setState({
            winner: this.getWinner(this.getPlayer()),
            winType: y,
            winningFigures: possibleMatches[x][y],
          });
          return true;
        }
      }
    }
    return false;
  };
  /**
   *Extracts and sorts the draw cell data from the currentDrawCells
   *@filter the character to filter by "x"/"o"
   * @currentBoardHistory the history of both players input on the board
   */
  filterValues = (filter, currentBoardHistory) => {
    return currentBoardHistory
      .filter((drawnCell) => drawnCell.player === filter)
      .map((cell) => {
        return cell.cell;
      })
      .sort();
  };

  /**
   *Retrieves the player value depending on the current players turn
   */
  getPlayer = () => {
    return this.state.player1Turn ? "x" : "o";
  };
  /**
   *Retrieves the winner
   */
  getWinner = (playerIcon) => {
    return playerIcon ? this.state.players[0] : this.state.players[1];
  };
  /**
   * Toggles the turns between players
   */
  toggleTurn = () => {
    this.setState({
      player1Turn: !this.state.player1Turn,
    });
  };
  /**
   *Gets the layout of the board
   */
  getBoardLayout = () => {
    return [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
  };

  render() {
    return (
      <div className="board">
        <GameMessage
          winner={this.state.winner}
          currentPlayer={this.getWinner(this.getPlayer())}
          draw={this.state.draw}
        />
        <DrawBoard
          layout={this.getBoardLayout()}
          onCellSelected={this.onCellSelected}
          boardHistory={this.state.boardHistory}
          getPlayer={this.getPlayer}
          active={this.state.winne || this.state.draw}
          draw={this.state.draw}
          winningFigures={this.state.winningFigures}
        />
      </div>
    );
  }
}
export default Board;
