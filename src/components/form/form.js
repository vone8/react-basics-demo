import React, { Component } from "react";

export class form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userName: "",
			userMessage: "",
			userOption: "React Js",
		};
	}

	userhandler = (event) => {
		this.setState({
			userName: event.target.value,
		});
	};

	messageHandle = (event) => {
		this.setState({
			userMessage: event.target.value,
		});
	};

	userOption = (event) => {
		this.setState({
			userOption: event.target.value,
		});
	};

	submitHandle = (event) => {
		alert(
			`${this.state.userName} ${this.state.userMessage} ${this.state.userOption}`
		);
		event.preventDefault();
	};

	render() {
		return (
			<form onSubmit={this.submitHandle}>
				<div>
					<label>User Name</label>
					<input
						type="text"
						value={this.state.userName}
						placeholder="User Name"
						onChange={this.userhandler}
					/>
				</div>
				<div>
					<label>Comment</label>
					<textarea
						placeholder="Message"
						value={this.state.userMessage}
						onChange={this.messageHandle}
					></textarea>
				</div>
				<div>
					<label>Select Tech</label>
					<select value={this.state.userOption} onChange={this.userOption}>
						<option value="React Js">React Js</option>
						<option value="Angular">Angular</option>
						<option value="Vue Js">Vue Js</option>
					</select>
				</div>
				<div>
					<input type="submit" value="submit" />
				</div>
			</form>
		);
	}
}

export default form;
