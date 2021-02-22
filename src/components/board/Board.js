import React from "react";
import GameMenu from "../game-menu/GameMenu";
import RenderBoard from "./RenderBoard";

import { getBotMove } from "../../api/botAPI";
import { boardMatches } from "../../api/boardAPI";
class Board extends React.Component {
  state = {
    tally: { player1Wins: 0, player2Wins: 0, ties: 0 },
    gameEnded: false,
    boardHistory: [],
    players: ["Player 1", "AI"],
    gameMode: 1, //0 - Human | 1 - Against Bot
    player1Turn: true,
    tie: false,
    winType: 0,
    winningFigures: [],
  };
  componentDidUpdate() {
    this.checkBotMove();
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (!nextState.gameEnded && nextState.boardHistory.length >= 3) {
      if (this.checkWinner(nextState.boardHistory)) {
        return true;
      }
      //Check for ties if there is no winner
      if (
        nextState.boardHistory.length >= 9 &&
        this.state.gameEnded === false &&
        this.state.tie === false
      ) {
        this.setGameEnded(true);
        this.incrementTally("tie");
        this.setState({ tie: true });
      }
    }
    return true;
  }
  /**
   *Stores the data of the draw cell when a cell is selecte
   * @value the current value of the cell selected
   */
  onCellSelected = (value) => {
    if (this.state.gameEnded) {
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
    this.setBoardHistory(boardHistory);
    this.toggleTurn();
  };
  /**
   *Check for the winner
   * @currentBoardHistory the history of both players input on the board
   */
  checkWinner = (currentBoardHistory) => {
    const playerCellValues = this.filterValues(
      this.getPlayer(),
      currentBoardHistory
    );
    const currentBoardMatches = boardMatches(); //The current bard matches
    for (var x = 0; x < currentBoardMatches.length; x++) {
      for (var y = 0; y < currentBoardMatches[x].length; y++) {
        var matchCount = 0;
        for (var z = 0; z < currentBoardMatches.length; z++) {
          if (playerCellValues.includes(currentBoardMatches[x][y][z])) {
            matchCount++;
          }
        }
        if (matchCount >= 3) {
          this.setState({
            winType: y,
            winningFigures: currentBoardMatches[x][y],
          });
          this.incrementTally(this.getPlayer());
          this.setGameEnded(true);
          return true;
        }
      }
    }
    return false;
  };
  /**
   *Extracts and sorts the draw cell data from the currentDrawCells
   * @filter the character to filter by "x"/"o"
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
   *Gets the layout of the board
   */
  getBoardLayout = () => {
    return [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
  };
  /**
   * Resets the game to defaults except the tally
   */
  resetBoard = () => {
    this.setState({
      gameEnded: false,
      winningFigures: [],
      boardHistory: [],
      players: ["Player 1", "AI"],
      player1Turn: true,
    });
  };
  /**
   * Increments the tally based on the win type passed
   */
  incrementTally = (type) => {
    var newTally = JSON.parse(JSON.stringify(this.state.tally));
    switch (type) {
      case "x":
        newTally.player1Wins = this.state.tally.player1Wins + 1;
        break;
      case "o":
        newTally.player2Wins += 1;
        break;
      case "tie":
        newTally.ties += 1;
        break;
      default:
        console.log("invalid tally type");
        break;
    }
    this.setState({
      tally: newTally,
    });
  };
  /**
   * Sets the game ended flag to active restricting all further board actions
   */
  setGameEnded = (value) => {
    console.log("Called");
    this.setState({ gameEnded: value });
  };
  /**
   * Updates the Board History of the game
   * @value the new value of the boardHistory
   */
  setBoardHistory = (value) => {
    this.setState({
      boardHistory: value,
    });
  };
  /**
   * Toggles the turns between players
   */
  toggleTurn = () => {
    this.setState({
      player1Turn: !this.state.player1Turn,
    });
  };
  checkBotMove = () => {
    //Bot game
    setTimeout(() => {
      if (
        !this.state.gameEnded &&
        !this.state.player1Turn &&
        this.state.gameMode === 1
      ) {
        //Get all of the xPlays and o plays moves
        const playerCellValues = this.filterValues(
          "x",
          this.state.boardHistory
        );
        const botValues = this.filterValues("o", this.state.boardHistory);

        var boardHistory = [
          ...this.state.boardHistory,
          getBotMove(this.state.boardHistory, "o", playerCellValues, botValues),
        ];
        this.setBoardHistory(boardHistory);
        this.toggleTurn();
      }
    }, 500);
  };
  /**
   * Resets the value of the tally's
   */
  resetTally = () => {
    this.setState({
      tally: { player1Wins: 0, player2Wins: 0, ties: 0 },
    });
  };
  /**
   * Toggles the gameemode
   */
  toggleGameMode = () => {
    this.setState({
      gameMode: this.state.gameMode === 0 ? 1 : 0,
    });
    this.resetBoard();
  };
  render() {
    return (
      <div className="board bg-white relative">
        <RenderBoard
          layout={this.getBoardLayout()}
          onCellSelected={this.onCellSelected}
          boardHistory={this.state.boardHistory}
          getPlayer={this.getPlayer}
          gameEnded={this.state.gameEnded}
          acceptPlayerInput={
            this.state.gameMode === 0 ||
            (this.state.gameMode !== 0 && this.state.player1Turn)
          }
          tie={this.state.tie}
          winningFigures={this.state.winningFigures}
          resetBoard={this.resetBoard}
        />
        <GameMenu
          tally={this.state.tally}
          player1Turn={this.state.player1Turn}
          gameMode={this.state.gameMode}
          toggleGameMode={this.toggleGameMode}
        />
      </div>
    );
  }
}
export default Board;
