import React from "react";

const GameMenu = ({ tally }) => {
  return (
    <div
      className="z-10  bottom-0 absolute bg-primary text-white  w-full px-8 flex justify-between border-t
border-gray-400 items-center text-xs sm:text-md"
    >
      <div className="flex flex-col items-center p-2">
        Player 1 (X)
        <span className="sm:text-2xl text-xl">{tally.player1Wins}</span>
      </div>
      <div className="flex flex-col items-center p-2">
        Ties
        <span className="sm:text-2xl text-xl">{tally.ties}</span>
      </div>
      <div className="flex flex-col items-center p-2">
        Player 2 (O)
        <span className="sm:text-2xl text-xl">{tally.player2Wins}</span>
      </div>
      <div className="flex flex-col items-center p-2">
        Mode
        <span className="sm:text-2xl text-xl">1P vs 2P</span>
      </div>
    </div>
  );
};
export default GameMenu;
