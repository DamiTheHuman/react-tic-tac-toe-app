import React from "react";

const Rules = () => {
  return (
    <div className="rules border-t bg-white lg:px-64 md:px-20 px-4 py-4 grid sm:grid-cols-2 sm:space-x-16 text-md">
      <div className="how-to-play mb-4">
        <h2 className="mb-4 text-2xl text-primary underline italic mb-4 capitalize">
          How To Play
        </h2>
        <ul className="list-decimal ml-4">
          <li>Select a Game Mode</li>
          <li>Wait your turn</li>
          <li>Select a Box</li>
          <li>Aim to get a three boxes of the same type in a row</li>
          <li>Stop your opponent from getting three a row</li>
        </ul>
      </div>
      <div className="main-rules">
        <h2 className="mb-4 text-2xl text-secondary underline italic mb-4 capitalize">
          Rules
        </h2>
        <ul className="list-disc ml-4">
          <li>The object of Tic Tac Toe is to get three in a row.</li>
          <li>You play on a three by three game board.</li>
          <li>The first player is known as X and the second is O.</li>
          <li>
            Players alternate placing Xs and Os on the game board until either
            oppent has three in a row or all nine squares are filled.
          </li>
          <li>
            X always goes first, and in the event that no one has three in a
            row, the stalemate is called a cat game.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rules;
