export const boardMatches = () => {
  return [
    [
      //Horizontal Matches
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [
      //Vertical Matches
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ],
    [
      // Diagonal Matches
      [1, 5, 9],
      [3, 5, 7],
    ],
  ];
};
