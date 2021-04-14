import React from "react";
import "./Piece.css";
const OPiece = () => {
  return (
    <div className="o-piece">
      <svg
        width="65"
        className="xl:p-12 p-2"
        height="70"
        viewBox="0 0 65 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.181 7.944C15.069 3.208 22.845 0.839996 32.509 0.839996C42.173 0.839996 49.917 3.24 55.741 8.04C61.629 12.776 64.573 19.464 64.573 28.104V43.08C64.573 51.848 61.661 58.536 55.837 63.144C50.077 67.688 42.301 69.96 32.509 69.96C22.717 69.96 14.909 67.688 9.085 63.144C3.325 58.536 0.445 51.848 0.445 43.08V28.104C0.445 19.4 3.357 12.68 9.181 7.944ZM27.325 49.32C28.605 50.6 30.333 51.24 32.509 51.24C34.685 51.24 36.413 50.6 37.693 49.32C38.973 48.04 39.613 46.088 39.613 43.464V27.336C39.613 24.776 38.973 22.856 37.693 21.576C36.413 20.232 34.685 19.56 32.509 19.56C30.333 19.56 28.605 20.232 27.325 21.576C26.045 22.856 25.405 24.776 25.405 27.336V43.464C25.405 46.088 26.045 48.04 27.325 49.32Z"
          stroke="black"
          strokeWidth="5"
        />
      </svg>
    </div>
  );
};

export default OPiece;
