import React, { Component } from "react";

class Counter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
	}

	increment() {
		this.setState((counterState) => ({
			count: counterState.count + 1,
		}));
	}

	decrement() {
		this.setState((counterState) => ({
			count: counterState.count <= 0 ? 0 : counterState.count - 1,
		}));
	}

	render() {
		return (
			<div>
				<div>Count - {this.state.count}</div>
				<button onClick={() => this.increment()}>Increase</button>
				<button onClick={() => this.decrement()}>Decrement</button>
			</div>
		);
	}
}
export default Counter;
