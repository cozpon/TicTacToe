import React, { Component } from "react";
import Board from "../../components/board.components.js";

const winningMoves = [[0, 3, 6], [0, 4, 8], [2, 4, 6], [0, 1, 2], [3, 4, 5], [6, 7, 8], [1, 4, 7], [2, 5, 8]];

class TicTac extends Component {
  constructor() {
    super();
    this.state = {
      winner: "",
      player: "X",
      X: [],
      O: [],
      gameOver: false,
      board: Array(9).fill(""), // creates an empty array to store our selections
      turns: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
  }

  handleClick(e) {
    if(this.state.gameOver) return; // Don't allow click functionality if game is over

    let id = parseInt(e.target.id);
    let board = this.state.board;
    let player = this.state.player;

    if(board[id] === "") { // if the selected spot is empty do this...
      board[id] = player; // set it to X or O depending on whose turn it is
      this.setState(prevState => ({
        [player]: [...this.state[player], id], // Setting board piece ID's to store where X or O selections go on
        player: prevState.player === "X" ? "O" : "X", // Sets state to the next player
        turns: prevState.turns + 1 // Adds to the turn count
      }));
    }

    let result = this.checkWinner();
    // checkWinner() will return X, O or Cat's Game if the board satisfies the function's conditional statements
    // which will trigger the following conditional statements and end the game.
    if(result === "X") {
      this.setState({
        winner: "X",
        gameOver: true
      });
    } else if(result === "O") {
      this.setState({
        winner: "O",
        gameOver: true
      });
    } else if(result === "cats game") {
      this.setState({
        winner: "cats game",
        gameOver: true
      });
    }
  }

  checkWinner() {
    let board = this.state.board;
    for(let i = 0; i < winningMoves.length; i++) { // loop through possible winning move combinations
      console.log(board);
      if(board[winningMoves[i][0]] === board[winningMoves[i][1]] && board[winningMoves[i][1]] === board[winningMoves[i][2]]) {
        // if the board array index matches a winning move, return either an X or an O
        return board[winningMoves[i][0]];
      }
    }
    if(this.state.turns === 8) {
      // If there are no matches by the time the board is full (8 turns)
      return "cats game";
    }
  }

  resetGame(evt) { // just resets State to inital state
    this.setState({
      winner: "",
      player: "X",
      X: [],
      O: [],
      gameOver: false,
      board: Array(9).fill(""),
      turns: 0
    });
  }

  render() {
    let apos = "'"; // Making my linter happy
    return (
      <div id="game">
        { this.state.gameOver ? ( // if the game is over
          <React.Fragment>
            <p className="game-over">
              <span>G</span><span>a</span><span>m</span><span>e</span><span>&nbsp;</span><span>O</span><span>v</span><span>e</span><span>r</span>
            </p>
            { this.state.winner !== "cats game" ? ( // if it's not a cat's game
              <div className="headline">
                {this.state.winner} wins!
              </div>
              ) : ( // if it is a cat's game
              <div className="headline">
                It's a Cat's Game!
              </div>
            )}
          </React.Fragment>
          ) : ( // if the game is still going on, display whose turn it is
            <div className="headline">
              It is { this.state.player }{ apos }s turn
            </div>
        )}
        <Board
          xSelected={this.state.X}
          oSelected={this.state.O}
          handleClick={this.handleClick}
        />
        <button className="reset-btn" onClick={ this.resetGame }>
          Reset
        </button>
      </div>
    );
  }
}
export default TicTac;
