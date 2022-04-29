import React, { Component } from "react";
import ComponentC from "./ComponentC";
import UserContext from "./UserContext";

export class ComponentB extends Component {
	render() {
		return (
			<div>
				Component C Content: {this.context}
				<ComponentC />
			</div>
		);
	}
}

ComponentB.contextType = UserContext;

export default ComponentB;
