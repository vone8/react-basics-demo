import React, { Component } from "react";
import ChildComponent from "../ChildComponent/ChildComponent";

class ParentComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			parent: "parent",
		};
		this.greetParent = this.greetParent.bind(this);
	}

	greetParent(child) {
		alert(`This is ${this.state.parent} from ${child}`);
	}

	render() {
		return (
			<div>
				<ChildComponent greetHandler={this.greetParent} />
			</div>
		);
	}
}

export default ParentComponent;
