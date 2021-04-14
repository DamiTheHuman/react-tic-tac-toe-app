import React from "react";
import "./Piece.css";
const XPiece = () => {
  return (
    <div className="x-piece text-center">
      <svg
        width="71"
        className="xl:p-12 p-2"
        height="68"
        viewBox="0 0 71 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M70.6941 64.832C70.8861 65.152 70.9821 65.568 70.9821 66.08C70.9821 66.528 70.7581 66.976 70.3101 67.424C69.9261 67.808 69.4461 68 68.8701 68H47.2701C45.5421 68 44.2301 67.264 43.3341 65.792L34.9821 52.928L27.0141 65.792C26.1181 67.264 24.8061 68 23.0781 68H2.15013C1.57413 68 1.06213 67.808 0.614125 67.424C0.230125 66.976 0.0381251 66.528 0.0381251 66.08C0.0381251 65.568 0.134125 65.152 0.326125 64.832L20.4861 33.632L2.34213 3.96799C2.15013 3.584 2.05413 3.168 2.05413 2.72C2.05413 2.272 2.24613 1.856 2.63013 1.472C3.07813 1.024 3.59013 0.799995 4.16613 0.799995H24.9981C26.7901 0.799995 28.1341 1.6 29.0301 3.2L35.7501 14.912L43.0461 3.2C43.9421 1.6 45.2861 0.799995 47.0781 0.799995H66.9501C67.5261 0.799995 68.0061 1.024 68.3901 1.472C68.8381 1.856 69.0621 2.304 69.0621 2.816C69.0621 3.264 68.9661 3.64799 68.7741 3.96799L50.2461 33.344L70.6941 64.832Z"
          stroke="black"
          strokeWidth="5"
        />
      </svg>
    </div>
  );
};

export default XPiece;
