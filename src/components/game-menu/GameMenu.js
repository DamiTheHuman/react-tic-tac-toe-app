import React from "react";
import "./GameMenu.css";
const GameMenu = ({ tally, player1Turn, gameMode, toggleGameMode }) => {
  const getGameMondMessage = () => {
    switch (gameMode) {
      case 1:
        return "1P vs BOT";
      default:
        return "1P vs 2P";
    }
  };
  return (
    <div
      className="game-menu z-10 bg-white w-full sm:px-8 px-2 mt-8 
    border-gray-400 z-100 relative items-center text-xs sm:text-m"
    >
      <div className="flex justify-between">
        <div
          className={`player-1 relative ${
            player1Turn ? "active" : ""
          } flex flex-col items-center p-2`}
        >
          Player 1 (X)
          <span className="sm:text-2xl text-xl">{tally.player1Wins}</span>
        </div>
        <div className="flex flex-col items-center p-2">
          Ties
          <span className="sm:text-2xl text-xl">{tally.ties}</span>
        </div>
        <div
          className={`player-2 relative ${
            !player1Turn ? "active" : ""
          } flex flex-col items-center p-2`}
        >
          Player 2 (O)
          <span className="sm:text-2xl text-xl">{tally.player2Wins}</span>
        </div>
        <div
          className="flex flex-col items-center p-2 pointer hover:text-primary text-secondary"
          onClick={() => {
            toggleGameMode();
          }}
        >
          Ghange Mode
          <span className="sm:text-2xl text-xl">{getGameMondMessage()}</span>
        </div>
      </div>
    </div>
  );
};
export default GameMenu;
