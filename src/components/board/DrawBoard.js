import React from "react";
import XPiece from "../pieces/XPiece";
import OPiece from "../pieces/OPiece";

const DrawBoard = ({
  layout,
  boardHistory,
  active,
  onCellSelected,
  winningFigures,
  draw,
}) => {
  const renderLayout = layout.map((row, index) => {
    const renderCells = row.map((cell, cellIndex) => {
      /* The value each cell holds*/
      const cellValue = cellIndex + 1 + index * 3;
      /** Renders the piece componenet based on the player */
      const getPieceComponenet = () => {
        return currentCellData[0].player === "x" ? <XPiece /> : <OPiece />;
      };
      const displayWinningFigures = () => {
        if (winningFigures.length > 1) {
          return winningFigures.includes(cellValue)
            ? "animate-flash"
            : "opacity-50";
        }
        return "";
      };
      const getBorderAnimation = () => {
        return draw ? "animate-borderFlash" : "";
      };
      /** The cell data that has this value */
      const currentCellData = boardHistory.filter(
        (drawnCell) => drawnCell.cell === cellValue
      );
      return (
        <th
          onClick={() => {
            onCellSelected(cellValue);
          }}
          className={`cell p-4 w-40 h-32 
          ${getBorderAnimation()}
          ${displayWinningFigures()}
          ${active ? "cursor-pointer" : ""} border-8 border-black ${
            cellIndex === 0 ? "border-l-0" : ""
          } ${index === 0 ? "border-t-0" : ""} ${
            index === 2 ? "border-b-0" : ""
          } ${cellIndex === 2 ? "border-r-0" : ""} `}
          key={cellIndex}
        >
          {currentCellData.length > 0 ? getPieceComponenet() : ""}
        </th>
      );
    });
    return <tr key={index}>{renderCells}</tr>;
  });

  return (
    <div className="mt-4">
      <table className="table-fixed mx-auto">
        <tbody>{renderLayout}</tbody>
      </table>
    </div>
  );
};

export default DrawBoard;
