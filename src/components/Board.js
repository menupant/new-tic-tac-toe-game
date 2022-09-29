import React from "react";
import Square from "./Square";

const Board = ({ board, handelSquare, winningSquares }) => {
  const render = (position) => {
    const iswinningSquares = winningSquares.includes(position);
    return (
      <Square
        value={board[position]}
        onClick={() => handelSquare(position)}
        iswinningSquares={iswinningSquares}
      />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {render(0)}
        {render(1)}
        {render(2)}
      </div>
      <div className="board-row">
        {render(3)}
        {render(4)}
        {render(5)}
      </div>
      <div className="board-row">
        {render(6)}
        {render(7)}
        {render(8)}
      </div>
    </div>
  );
};

export default Board;
