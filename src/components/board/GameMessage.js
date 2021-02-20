import React from "react";

const GameMessage = ({ winner, currentPlayer, draw }) => {
  const renderContent = () => {
    if (draw) {
      return "It's a Draw between both players";
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
