import React, { Component } from "react";
import updatedComponent from "./WithCounter";

class HigherOrderComponents extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
	}

	handleIncrement() {
		this.setState((prevState) => ({
			count: prevState.count + 1,
		}));
	}

	render() {
		return (
			<div>
				<button onClick={() => this.handleIncrement()}>
					{this.props.name}
					{this.state.count}
				</button>
			</div>
		);
	}
}

export default updatedComponent(HigherOrderComponents);
