import React, { Component } from "react";

class ClassClick extends Component {
	classclick() {
		console.log("Button is Clicked");
	}
	render() {
		return (
			<div>
				<button onClick={this.classclick}>Click Class Button</button>
			</div>
		);
	}
}

export default ClassClick;
