import React, { Component } from "react";

class PostForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userid: "",
			username: "",
			userbody: "",
		};
	}

	changeHandler = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};
	submitHandler = (event) => {
		event.preventDefault();
		console.log(this.state);
	};

	render() {
		const { userid, username, userbody } = this.state;
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					<div>
						<input
							type="textbox"
							name="userid"
							placeholder="ID"
							value={userid}
							onChange={this.changeHandler}
						></input>
					</div>
					<div>
						<input
							type="textbox"
							name="username"
							placeholder="Name"
							value={username}
							onChange={this.changeHandler}
						></input>
					</div>
					<div>
						<input
							type="textbox"
							name="userbody"
							placeholder="Body"
							value={userbody}
							onChange={this.changeHandler}
						></input>
					</div>
					<button type="Submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default PostForm;
