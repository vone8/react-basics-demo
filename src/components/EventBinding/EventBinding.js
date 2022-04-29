import React, { Component } from "react";

class EventBinding extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: "Hello World",
		};
	}
	clickHandler() {
		this.setState({
			message: "Welcome World",
		});
	}
	render() {
		return (
			<div>
				<p>{this.state.message}</p>
				{/* <button onClick={this.clickHandler.bind(this)}>Event Binding</button> */}
				<button onClick={() => this.clickHandler()}>Event Binding</button>
			</div>
		);
	}
}

export default EventBinding;
