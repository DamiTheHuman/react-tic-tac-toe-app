import React from "react";
import XPiece from "../pieces/XPiece";
import OPiece from "../pieces/OPiece";

const DrawBoard = ({ layout, boardHistory, onCellSelected }) => {
  const renderLayout = layout.map((row, index) => {
    const renderCells = row.map((cell, cellIndex) => {
      /* The value each cell holds*/
      const cellValue = cellIndex + 1 + index * 3;
      /** Renders the piece componenet based on the player */
      const getPieceComponenet = () => {
        return currentCellData[0].player === "x" ? <XPiece /> : <OPiece />;
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
          className={`cell p-8 w-40 h-44 cursor-pointer border-8 border-black
          ${cellIndex === 0 ? "border-l-0" : ""}
          ${index === 0 ? "border-t-0" : ""}
          ${index === 2 ? "border-b-0" : ""}
          ${cellIndex === 2 ? "border-r-0" : ""}
          
          `}
          key={cellIndex}
        >
          <p>{currentCellData.length > 0 ? getPieceComponenet() : ""}</p>
        </th>
      );
    });
    return <tr key={index}>{renderCells}</tr>;
  });

  return (
    <div className="mt-4">
      <table className="table-fixed mx-auto">{renderLayout}</table>
    </div>
  );
};

export default DrawBoard;
