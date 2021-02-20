import React from "react";
import DrawBoard from "./DrawBoard";

class Board extends React.Component {
  state = {
    boardHistory: [],
    players: ["User", "AI"],
    player1Turn: true,
    winner: false,
    winType: 0,
  };
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
      this.checkWinner(boardHistory)
    );
  };
  /**
   *Check for the winner
   * @currentBoardHistory the history of both players input on the board
   */
  checkWinner = (currentBoardHistorys) => {
    //Check player values
    const playerValues = this.filterValues(
      this.getPlayer(),
      currentBoardHistorys
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
          alert("WE HAVE A WNNER " + this.getPlayer());
          this.setState({ winner: true, winType: y });
        }
      }
    }
    this.toggleTurn();
  };
  /**
   *Extracts and sorts the draw cell data from the currentDrawCells
   *@filter the character to filter by "x"/"o"
   * @currentBoardHistory the history of both players input on the board
   */
  filterValues = (filter, currentBoardHistorys) => {
    return currentBoardHistorys
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
        <DrawBoard
          layout={this.getBoardLayout()}
          onCellSelected={this.onCellSelected}
          boardHistory={this.state.boardHistory}
          getPlayer={this.getPlayer}
        />
      </div>
    );
  }
}
export default Board;
