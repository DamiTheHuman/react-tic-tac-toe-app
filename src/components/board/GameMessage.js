import React from "react";

const GameMessage = ({ winner, currentPlayer, tie }) => {
  const renderContent = () => {
    if (tie) {
      return "It's a Tie between both players";
    }
    return !winner ? `It's ${currentPlayer}'s Turn` : `The Winner is ${winner}`;
  };
  return (
    <div className="game-message">
      <h2 className="text-6xl text-primary mb-12 capitalize">
        {renderContent()}
      </h2>
    </div>
  );
};
export default GameMessage;
