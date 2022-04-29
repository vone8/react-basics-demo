import React, { Component } from "react";

export class UserGreeting extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: false,
		};
	}

	render() {
		// if (this.state.isLoggedIn) {
		// 	return <div>Welcome Vijay</div>;
		// } else {
		// 	return <div>Welcome Guest</div>;
		// }

		return this.state.isLoggedIn ? (
			<div>Welcome Vijay</div>
		) : (
			<div>Welcome Guest</div>
		);
	}
}

export default UserGreeting;
