import React from 'react';

const Board = ({ xSelected, oSelected, handleClick }) => {
  let squares = [...Array(9)];
  let board =
    squares.map((x, index) => { // creating 9 squares, using map()'s index as their ID
      if(xSelected.includes(parseInt(index))) {
        return(
          <div key={index} className="square" id={index}>
            <div className="selected">
              X
            </div>
          </div>
        );
      };
      if(oSelected.includes(parseInt(index))) {
        return (
          <div key={index} className="square" id={index}>
            <div className="selected">
              O
            </div>
          </div>
        );
      };
      return (
        <div key={index} className="square" id={index}></div>
      );
    });

  return (
    <div id="board" onClick={handleClick}>
      { board }
    </div>
  );
};

export default Board;