import React, { Component } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";
import MemoComp from "../MemoComp/MemoComp";

export class ParentComp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "Vijay",
		};
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				name: "Vijay",
			});
		}, 2000);
	}

	render() {
		console.log("Parent Component Rendered");
		return (
			<div>
				{/* <RegComp name={this.state.name} />
				<PureComp name={this.state.name} /> */}
				<MemoComp name={this.state.name} />
			</div>
		);
	}
}

export default ParentComp;
