import React from 'react';

const Board = ({ xSelected, oSelected, handleClick, reset }) => {
  let boxes = [...Array(9)];
  let board =
    boxes.map((x, i) => {
      if(xSelected.includes(parseInt(i))) {
        return(
          <div key={i} className="square" id={i}>
            <div className="selected">
              X
            </div>
          </div>
        )
      }
      if(oSelected.includes(parseInt(i))) {
        return (
          <div key={i} className="square" id={i}>
            <div className="selected">
              O
            </div>
          </div>
        )
      }
    return (
      <div
        key={i}
        className="square"
        id={i}>
      </div>
      )
    });

  return (
    <div id="board" onClick={handleClick}>
     { board }
     </div>
  );
};

export default Board;


// import React from 'react';

// const Board = ({ handleClick, reset }) => {
//   let boxes = [...Array(9)];
//   let board = boxes.map((x, index) => {
//     return (<div className="square" key={index} id={index}></div>)
//   }) // creating 9 squares, using map()'s index as their ID

//   return (
//     <React.Fragment>
//       <div id="board" onClick={ handleClick }>
//        { board }
//           <button onClick={ reset }>
//             reset
//           </button>
//       </div>
//     </React.Fragment>
//   );
// };

// export default Board;