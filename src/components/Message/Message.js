import React, { Component } from "react";

class Message extends Component {
	constructor() {
		super();
		this.state = {
			message: "Welcome Visitor",
		};
	}

	changeText() {
		this.setState({
			message: "Subscribed",
		});
	}

	render() {
		return (
			<div>
				<h1 className="title">{this.state.message}</h1>
				<button onClick={() => this.changeText()}>Subscribe</button>
			</div>
		);
	}
}

export default Message;
