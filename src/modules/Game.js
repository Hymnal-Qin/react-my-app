import React, { Component } from "react";

// class Square extends React.Component {
//   //通过在 React 组件的构造函数中设置 this.state 来初始化 state。
//   //this.state 应该被视为一个组件的私有属性。
//   //我们在 this.state 中存储当前每个方格（Square）的值，
//   //并且在每次方格被点击的时候改变这个值。
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     value: null,
//   //   };
//   // }
//   render() {
//     return (
//       <button
//         className="square"
//         onClick={() => { this.props.onClick() }}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }

function Square(props) {
	return (
		<button className='square' onClick={props.onClick}>
			{props.value}
		</button>
	);
}

class Board extends Component {
	// constructor(props) {
	//   super(props);
	//   this.state = {
	//     squares: Array(9).fill(null),
	//     xIsNext: true,
	//   };
	// }

	// handleClick(i) {
	//   const squares = this.state.squares.slice();
	//   if (calculateWinner(squares) || squares[i]) {
	//     return
	//   }
	//   squares[i] = this.state.xIsNext ? 'X' : 'O';
	//   this.setState({
	//     squares: squares,
	//     xIsNext: !this.state.xIsNext,
	//   });
	// }

	renderSquare(i) {
		return (
			<Square
				value={this.props.squares[i]}
				onClick={() => this.props.onClick(i)}
			/>
		);
	}

	render() {
		// const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
		// const winner = calculateWinner(this.state.squares)
		// let status;
		// if (winner) {
		//   status = 'Winner: ' + winner;
		// } else {
		//   status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
		// }

		return (
			<div>
				{/* <div className="status">{status}</div> */}
				<div className='board-row'>
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className='board-row'>
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className='board-row'>
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		);
	}
}

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			history: [
				{
					squares: Array(9).fill(null)
				}
			],
			stepNumber: 0,
			xIsNext: true
		};
	}

	handleClick(i) {
		const history = this.state.history.slice(0, this.state.stepNumber + 1);
		const current = history[history.length - 1];
		const squares = current.squares.slice();
		if (calculateWinner(squares) || squares[i]) {
			return;
		}
		squares[i] = this.state.xIsNext ? "X" : "O";
		this.setState({
			history: history.concat([
				{
					squares: squares
				}
			]),
			stepNumber: history.length,
			xIsNext: !this.state.xIsNext
		});
	}

	jumpTo(step) {
		this.setState({
			stepNumber: step,
			xIsNext: step % 2 === 0
		});
	}

	render() {
		const history = this.state.history;
		const current = history[this.state.stepNumber];
		const winner = calculateWinner(current.squares);

		const moves = history.map((step, move) => {
			const desc = move ? "Go to move #" + move : "Go to game start";
			return (
				<li key={move}>
					<button onClick={() => this.jumpTo(move)}>{desc}</button>
				</li> // const Clock = React.lazy(() => import('./Clock'));
			);
		});

		let status;
		if (winner) {
			status = "Winner: " + winner;
		} else {
			status = "Next player: " + (this.state.xIsNext ? "X" : "O");
		}
		return (
			<div className='game'>
				<div>{status}</div>
				<div className='game-board'>
					<Board squares={current.squares} onClick={i => this.handleClick(i)} />
				</div>
				<div className='game-info'>
					history
					<ol>{moves}</ol>
				</div>
			</div>
		);
	}
}

function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
}

export default Game;
