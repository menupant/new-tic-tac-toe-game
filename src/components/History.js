import React from "react";
const History = ({ history, movetO, currentMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, move) => {
          return (
            <li key={move}>
              <button
                className={`btn-move ${move === currentMove ? "active" : ""}`}
                type="button"
                onClick={() => {
                  movetO(move);
                }}
              >
                {move === 0 ? `go to game start ` : `go to move #${move}`}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default History;
