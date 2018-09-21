import React, { Component } from 'react';
import './App.css';

import Cell from './Cell'
  
class App extends Component {  
  constructor(props){
    super(props)
    this.state = {
      board: []
    }
    this.onUpdate = this.onUpdate.bind(this)
  }

  onUpdate = (i) => {
    let board = this.state.board.slice()
    board[i]= ( i % 2 ) ? 'X' : '0'
    this.setState({board: board})
    if(this.has_won()){
      console.log('gano')
    }
  }

  has_won = () => {
    let board = this.state.board.slice()
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i=0; i<lines.length;i++){
      const a = lines[i][0]
      const b = lines[i][1]
      const c = lines[i][2]
      if (
        board[a] !== undefined && 
        board[a] === board[b] && 
        board[b] === board[c]
        ) return true
    }
    return false
  }
  
  render() {
    return (
      <div className="board">
        <div className="row">
          <Cell data={[this.state.board[0], 0]} onUpdate={this.onUpdate} />
          <Cell data={[this.state.board[1], 1]} onUpdate={this.onUpdate} />
          <Cell data={[this.state.board[2], 2]} onUpdate={this.onUpdate} />
        </div>
        <div className="row">
          <Cell data={[this.state.board[3], 3]} onUpdate={this.onUpdate} />
          <Cell data={[this.state.board[4], 4]} onUpdate={this.onUpdate} />
          <Cell data={[this.state.board[5], 5]} onUpdate={this.onUpdate} />
        </div>
        <div className="row">
          <Cell data={[this.state.board[6], 6]} onUpdate={this.onUpdate} />
          <Cell data={[this.state.board[7], 7]} onUpdate={this.onUpdate} />
          <Cell data={[this.state.board[8], 8]} onUpdate={this.onUpdate} />
        </div>
      </div>
    );
  }
}

export default App;