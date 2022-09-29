import React, { useState } from "react";
import Board from "./components/Board";
import "./style/root.scss";
import { calculateWinner } from "./helper";
import History from "./components/History";
import StatusMessage from "./components/StatusMessage";

const New_Game = [{ board: Array(9).fill(null), isXNext: true }];
const App = () => {
  const [history, setHistory] = useState(New_Game);
  // const [isNext, setIsNext] = useState(false);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];
  const { winner, winningSquares } = calculateWinner(current.board);
  const handelSquare = (position) => {
    if (current.board[position] || winner) {
      return;
    }
    setHistory((prev) => {
      const last = prev[prev.length - 1];
      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? "X" : "O";
        }
        return square;
      });
      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });
    setCurrentMove((prev) => prev + 1);
  };
  const movetO = (move) => {
    setCurrentMove(move);
  };
  const onNewGame = () => {
    setHistory(New_Game);
    setCurrentMove(0);
  };
  return (
    <div className="app">
      <h1>
        TIC <span className="text-green">TAC</span> TOE
      </h1>
      <StatusMessage winner={winner} current={current} />
      <Board
        board={current.board}
        handelSquare={handelSquare}
        winningSquares={winningSquares}
      />
      <button
        type="button"
        onClick={onNewGame}
        className={`btn-reset ${winner ? "active" : ""}`}
      >
        Start New Game
      </button>
      <h2 style={{ fontWeight: "normal" }}>Current Game History</h2>
      <History history={history} movetO={movetO} currentMove={currentMove} />
      <div className="bg-balls"></div>
    </div>
  );
};
export default App;
