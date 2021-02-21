import React from "react";
import XPiece from "../pieces/XPiece";
import OPiece from "../pieces/OPiece";

const RenderBoard = ({
  layout,
  boardHistory,
  gameEnded,
  onCellSelected,
  winningFigures,
  tie,
  resetBoard,
}) => {
  const renderLayout = layout.map((row, index) => {
    const renderCells = row.map((cell, cellIndex) => {
      /* The value each cell holds*/
      const cellValue = cellIndex + 1 + index * 3;

      /** Renders the piece componenet based on the player */
      const getPieceComponenet = () => {
        return currentCellData[0].player === "x" ? <XPiece /> : <OPiece />;
      };

      /*Gives the winning figures an animation */
      const displayWinningFigures = () => {
        if (winningFigures.length > 1 && gameEnded) {
          return winningFigures.includes(cellValue)
            ? "animate-flash"
            : "opacity-50";
        }
        return "";
      };

      /*Flashes the border when there is a tie */
      const getBorderAnimation = () => {
        return tie ? "animate-borderFlash" : "";
      };
      /** The cell data that has this value */
      const currentCellData = boardHistory.filter(
        (drawnCell) => drawnCell.cell === cellValue
      );

      return (
        <th
          onClick={() => {
            if (!gameEnded) {
              onCellSelected(cellValue);
            }
          }}
          className={`cell align-center ${getBorderAnimation()} ${displayWinningFigures()} ${
            gameEnded ? "cursor-pointer" : ""
          } border-8 border-silver  ${cellIndex === 0 ? "border-l-0" : ""} ${
            index === 0 ? "border-t-0" : ""
          }${index === 2 ? "border-b-0" : ""} ${
            cellIndex === 2 ? "border-r-0" : ""
          } `}
          key={cellIndex}
        >
          <div className="content">
            {currentCellData.length > 0 ? getPieceComponenet() : ""}
          </div>
        </th>
      );
    });
    return <tr key={index}>{renderCells}</tr>;
  });

  return (
    <div className="render-board py-8 lg:px-40 md:px-36 px-4">
      <table
        className="table-fixed w-full"
        onClick={() => {
          if (gameEnded) {
            resetBoard();
          }
        }}
      >
        <tbody>{renderLayout}</tbody>
      </table>
    </div>
  );
};

export default RenderBoard;
